import nodemailer from 'nodemailer';

// ============================================================
// 1) SMTP — данные почтового ящика, С КОТОРОГО отправляются письма
// ============================================================
const SMTP = {
  host: 'smtp.mail.ru', // smtp.mail.ru, smtp.yandex.ru, smtp.gmail.com и т.д.
  port: 465,
  secure: true, // true для 465, false для 587
  user: 'ВАШ_EMAIL_ДЛЯ_ОТПРАВКИ@mail.ru',
  pass: 'ПАРОЛЬ_ПРИЛОЖЕНИЯ',
};

// ============================================================
// 2) БЕЛЫЙ СПИСОК ПОЛУЧАТЕЛЕЙ — вставьте сюда ТЕ ЖЕ 2 адреса,
//    что указали в формах на страницах /legal и /accounting
// ============================================================
const ALLOWED_RECIPIENTS = [
  'pravonvrsk@mail.ru',   // заявки со страницы /legal (Юридические услуги)
  'ter4401@yandex.ru',    // заявки со страницы /accounting (Бухгалтерские услуги)
];

// ============================================================

const SERVICE_LABELS: Record<string, string> = {
  legal: 'Юридические услуги',
  accounting: 'Бухгалтерские услуги',
};

const EMAIL_RE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// Rate limit: максимум 3 заявки с одного IP за 10 минут
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const submissions = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  const host = request.headers.get('host');
  if (!host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return Response.json({ ok: false, error: 'Доступ запрещён' }, { status: 403 });
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return Response.json({ ok: false, error: 'Слишком много заявок. Попробуйте позже.' }, { status: 429 });
    }

    const body = await request.json();
    const { name, email, phone, message, theme, recipientEmail } = body as {
      name?: unknown;
      email?: unknown;
      phone?: unknown;
      message?: unknown;
      theme?: unknown;
      recipientEmail?: unknown;
    };

    const cleanName = typeof name === 'string' ? name.trim().slice(0, 100) : '';
    const cleanEmail = typeof email === 'string' ? email.trim().slice(0, 254) : '';
    const cleanPhone = typeof phone === 'string' ? phone.trim().slice(0, 30) : '';
    const cleanMessage = typeof message === 'string' ? message.trim().slice(0, 3000) : '';

    if (!cleanName || !cleanEmail || !cleanPhone || !cleanMessage) {
      return Response.json({ ok: false, error: 'Заполните все поля формы' }, { status: 400 });
    }

    if (!EMAIL_RE.test(cleanEmail)) {
      return Response.json({ ok: false, error: 'Некорректный email' }, { status: 400 });
    }

    if (
      typeof recipientEmail !== 'string' ||
      !EMAIL_RE.test(recipientEmail) ||
      !ALLOWED_RECIPIENTS.includes(recipientEmail)
    ) {
      return Response.json({ ok: false, error: 'Недопустимый получатель' }, { status: 400 });
    }

    const serviceLabel = SERVICE_LABELS[String(theme)] || SERVICE_LABELS.legal;

    const transporter = nodemailer.createTransport({
      host: SMTP.host,
      port: SMTP.port,
      secure: SMTP.secure,
      auth: {
        user: SMTP.user,
        pass: SMTP.pass,
      },
    });

    await transporter.sendMail({
      from: `"Заявка с сайта" <${SMTP.user}>`,
      to: recipientEmail,
      replyTo: cleanEmail,
      subject: `Заявка с сайта: ${serviceLabel}`,
      text: `Имя: ${cleanName}\nEmail: ${cleanEmail}\nТелефон: ${cleanPhone}\n\nСообщение:\n${cleanMessage}`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ ok: false, error: 'Не удалось отправить заявку. Попробуйте позже.' }, { status: 500 });
  }
}
