'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function LegalPage() {
  const services = [
    {
      title: "Юридическое сопровождение бизнеса",
      description: "Комплексное правовое сопровождение деятельности компании, включая договорную работу и консультации",
      features: [
        "Правовой аудит документации",
        "Разработка договоров",
        "Юридические консультации",
        "Правовая экспертиза"
      ]
    },
    {
      title: "Представительство в суде",
      description: "Защита интересов в судах всех инстанций, подготовка процессуальных документов",
      features: [
        "Подготовка документов",
        "Представление интересов в суде",
        "Обжалование решений",
        "Исполнительное производство"
      ]
    },
    {
      title: "Корпоративное право",
      description: "Регистрация и ликвидация компаний, внесение изменений в учредительные документы",
      features: [
        "Регистрация компаний",
        "Внесение изменений в ЕГРЮЛ",
        "Реорганизация бизнеса",
        "Ликвидация компаний"
      ]
    },
    {
      title: "Договорное право",
      description: "Разработка, экспертиза и сопровождение договоров любой сложности",
      features: [
        "Составление договоров",
        "Правовая экспертиза",
        "Согласование условий",
        "Претензионная работа"
      ]
    }
  ];

  const familyLaw = {
    title: "Семейное право",
    description: "Помощь в решении семейных споров: брак, развод, имущество и дети",
    features: [
      "Консультации по вопросам брака и развода",
      "Раздел имущества супругов",
      "Вопросы опеки и содержания детей",
      "Установление отцовства",
      "Алиментные обязательства",
      "Споры о детях"
    ]
  };

  return (
    <main className="min-h-screen pt-28 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="relative py-10 lg:py-14">
          <div className="absolute inset-0 bg-dark-glow" />
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: EASE }}
                className="group relative w-full"
              >
                <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(closest-side,rgba(213,163,41,0.10),transparent)] blur-2xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lux">
                  <div className="absolute inset-0 will-change-transform transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
                    <Image
                      src="/ur.jpg"
                      alt="Юрист"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120907]/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(18,9,7,0.5)_100%)]" />
                  </div>
                  <div className="absolute inset-0 gold-border rounded-[2rem] pointer-events-none" />
                  <div className="absolute inset-4 rounded-[1.6rem] border border-white/10 pointer-events-none" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
                className="pt-1"
              >
                <h1 className="text-4xl md:text-5xl xl:text-[3.4rem] font-bold leading-[1.1] tracking-tight text-[#F3EEE7] mb-9">
                  Профессиональные юридические услуги для физических и юридических лиц
                </h1>

                <div className="card-dark-hover group relative overflow-hidden p-8 lg:p-9">
                  <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#D5A329]/[0.06] blur-3xl" />
                  <div className="relative flex items-center gap-5">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-[#D5A329]/20 bg-gradient-to-b from-[#D5A329]/12 to-transparent transition-shadow duration-500 group-hover:shadow-gold">
                      <svg className="h-6 w-6 text-[#E4BD55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-[#F3EEE7]">{familyLaw.title}</h3>
                  </div>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-[#D5A329]/25 to-transparent" />
                  <p className="mt-6 text-[#A99B8C] text-lg leading-relaxed">{familyLaw.description}</p>
                  <ul className="mt-6 space-y-3.5">
                    {familyLaw.features.map((feature, i) => (
                      <li key={i} className="group/item flex items-center gap-3.5 text-[#A99B8C] transition-colors duration-300 hover:text-[#F3EEE7]">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#D5A329]/20 bg-[#D5A329]/[0.07] transition-all duration-300 group-hover/item:border-[#D5A329]/50 group-hover/item:bg-[#D5A329]/15">
                          <svg className="h-3 w-3 text-[#E4BD55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-base lg:text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: EASE }}
                className="card-dark-hover group relative overflow-hidden p-8 lg:p-10"
              >
                <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#D5A329]/[0.06] blur-3xl" />
                <div className="relative flex items-center gap-5">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-[#D5A329]/20 bg-gradient-to-b from-[#D5A329]/12 to-transparent transition-shadow duration-500 group-hover:shadow-gold">
                    <svg className="h-6 w-6 text-[#E4BD55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#F3EEE7]">{service.title}</h3>
                </div>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-[#D5A329]/25 to-transparent" />
                <p className="mt-6 text-[#A99B8C] text-lg leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-3.5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="group/item flex items-center gap-3.5 text-[#A99B8C] transition-colors duration-300 hover:text-[#F3EEE7]">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#D5A329]/20 bg-[#D5A329]/[0.07] transition-all duration-300 group-hover/item:border-[#D5A329]/50 group-hover/item:bg-[#D5A329]/15">
                        <svg className="h-3 w-3 text-[#E4BD55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-base lg:text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Phone CTA */}
        <section className="py-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 text-center shadow-lux"
          >
            <div className="absolute inset-0 bg-[#1B0E0A]" />
            <div className="absolute inset-0 bg-dark-glow" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[26rem] rounded-full bg-[#D5A329]/10 blur-3xl pointer-events-none" />
            <div className="relative">
              <h2 className="section-title">Нужна срочная консультация?</h2>
              <p className="text-[#A99B8C] text-lg mb-9">
                Позвоните или напишите нам — мы на связи
              </p>
              <div className="flex flex-wrap justify-center items-center gap-5">
                <Link
                  href="tel:+79649029100"
                  className="group relative inline-flex items-center overflow-hidden rounded-xl px-10 py-5 shadow-gold transition-all duration-500 hover:-translate-y-0.5 hover:shadow-gold-lg"
                >
                  <div className="absolute inset-0 gold-bg-warm" />
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                  <svg className="relative w-5 h-5 mr-3 text-[#120907]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="relative text-[#120907] font-bold text-lg">Позвонить нам</span>
                </Link>
                <Link
                  href="mailto:pravonvrsk@mail.ru"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-[#D5A329]/35 bg-[#D5A329]/5 px-9 py-[1.15rem] transition-all duration-500 hover:-translate-y-0.5 hover:border-[#D5A329]/70 hover:bg-[#D5A329]/10 hover:shadow-gold"
                >
                  <svg className="w-5 h-5 text-[#E4BD55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="gold-text font-semibold text-lg">pravonvrsk@mail.ru</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
