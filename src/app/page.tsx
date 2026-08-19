'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-glow" />
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[56rem] h-[44rem] bg-[radial-gradient(closest-side,rgba(213,163,41,0.09),transparent)] blur-[70px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-[radial-gradient(closest-side,rgba(213,163,41,0.05),transparent)] blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D5A329]/25 to-transparent" />

        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
            className="flex flex-col items-center gap-9 lg:gap-12"
          >
            <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-[4.25rem] font-bold leading-[1.06] tracking-tight text-[#F3EEE7]">
              Профессиональные <span className="gold-text">бухгалтерские</span> и <span className="gold-text">юридические</span> услуги
            </h1>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full pt-4">
              <Link href="/accounting" className="group block text-left">
                <div className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
                  <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lux transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_40px_90px_-32px_rgba(0,0,0,0.85),0_0_70px_-20px_rgba(213,163,41,0.3)]">
                    <div className="absolute inset-0 will-change-transform transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
                      <Image
                        src="/calculator.jpg"
                        alt="Бухгалтерские услуги"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#120907] via-[#120907]/25 to-[#120907]/10" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(18,9,7,0.55)_100%)]" />
                    </div>
                    <div className="absolute inset-0 gold-border rounded-[2rem] pointer-events-none" />
                    <div className="absolute inset-4 rounded-[1.6rem] border border-white/10 pointer-events-none" />

                    <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9">
                      <p className="text-[#A99B8C] text-base lg:text-lg leading-relaxed mb-4 max-w-md">
                        Полное бухгалтерское сопровождение вашего бизнеса, налоговая отчетность и оптимизация
                      </p>
                      <div className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-[#E4BD55]">
                        <span className="relative">
                          Подробнее
                          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#D5A329] to-[#E4BD55] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                        </span>
                        <svg className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="mt-6 text-2xl lg:text-3xl font-semibold tracking-tight text-center text-[#F3EEE7] transition-colors duration-500 group-hover:text-[#E4BD55]">Бухгалтерские услуги</h2>
              </Link>

              <Link href="/legal" className="group block text-left">
                <div className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
                  <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lux transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_40px_90px_-32px_rgba(0,0,0,0.85),0_0_70px_-20px_rgba(213,163,41,0.3)]">
                    <div className="absolute inset-0 will-change-transform transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
                      <Image
                        src="/hammer.jpg"
                        alt="Юридические услуги"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#120907] via-[#120907]/25 to-[#120907]/10" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(18,9,7,0.55)_100%)]" />
                    </div>
                    <div className="absolute inset-0 gold-border rounded-[2rem] pointer-events-none" />
                    <div className="absolute inset-4 rounded-[1.6rem] border border-white/10 pointer-events-none" />

                    <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9">
                      <p className="text-[#A99B8C] text-base lg:text-lg leading-relaxed mb-4 max-w-md">
                        Правовая поддержка бизнеса, договорная работа, семейное право и представительство в суде
                      </p>
                      <div className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-[#E4BD55]">
                        <span className="relative">
                          Подробнее
                          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#D5A329] to-[#E4BD55] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                        </span>
                        <svg className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="mt-6 text-2xl lg:text-3xl font-semibold tracking-tight text-center text-[#F3EEE7] transition-colors duration-500 group-hover:text-[#E4BD55]">Юридические услуги</h2>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Directions */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B0E0A]/70 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Основные направления</h2>
            <div className="mx-auto mt-6 h-[3px] w-20 rounded-full gold-bg shadow-gold" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: EASE }}
              className="card-dark-hover group relative overflow-hidden p-9 lg:p-12"
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#D5A329]/[0.06] blur-3xl" />
              <h3 className="flex items-center gap-4 text-2xl lg:text-[1.75rem] font-semibold tracking-tight text-[#F3EEE7]">
                <span className="h-10 w-1 rounded-full gold-bg shadow-gold" />
                Бухгалтерское сопровождение
              </h3>
              <div className="mt-7 h-px w-full bg-gradient-to-r from-[#D5A329]/25 to-transparent" />
              <ul className="mt-7 space-y-4">
                {[
                  'Ведение бухгалтерского учета',
                  'Налоговая отчетность',
                  'Расчет заработной платы',
                  'Оптимизация налогообложения',
                ].map((item) => (
                  <li key={item} className="group/item flex items-center gap-4 text-[#A99B8C] transition-colors duration-300 hover:text-[#F3EEE7]">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#D5A329]/20 bg-[#D5A329]/[0.07] transition-all duration-300 group-hover/item:border-[#D5A329]/50 group-hover/item:bg-[#D5A329]/15 group-hover/item:shadow-gold">
                      <svg className="h-3.5 w-3.5 text-[#E4BD55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base lg:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: EASE }}
              className="card-dark-hover group relative overflow-hidden p-9 lg:p-12"
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#D5A329]/[0.06] blur-3xl" />
              <h3 className="flex items-center gap-4 text-2xl lg:text-[1.75rem] font-semibold tracking-tight text-[#F3EEE7]">
                <span className="h-10 w-1 rounded-full gold-bg shadow-gold" />
                Юридическое сопровождение
              </h3>
              <div className="mt-7 h-px w-full bg-gradient-to-r from-[#D5A329]/25 to-transparent" />
              <ul className="mt-7 space-y-4">
                {[
                  'Регистрация и ликвидация компаний',
                  'Договорное право',
                  'Семейное право',
                  'Представительство в суде',
                  'Корпоративное право',
                ].map((item) => (
                  <li key={item} className="group/item flex items-center gap-4 text-[#A99B8C] transition-colors duration-300 hover:text-[#F3EEE7]">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#D5A329]/20 bg-[#D5A329]/[0.07] transition-all duration-300 group-hover/item:border-[#D5A329]/50 group-hover/item:bg-[#D5A329]/15 group-hover/item:shadow-gold">
                      <svg className="h-3.5 w-3.5 text-[#E4BD55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base lg:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B0E0A]/70 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Как мы работаем</h2>
            <p className="section-subtitle mt-4">Простой и эффективный процесс сотрудничества</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Заявка', desc: 'Оставьте заявку или свяжитесь с нами удобным способом' },
              { step: '2', title: 'Консультация', desc: 'Бесплатная консультация и обсуждение ваших задач' },
              { step: '3', title: 'Договор', desc: 'Заключение договора с четкими условиями сотрудничества' },
              { step: '4', title: 'Результат', desc: 'Качественное выполнение работы в установленные сроки' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="card-dark-hover group relative overflow-hidden p-8 text-center"
              >
                <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-32 w-48 rounded-full bg-[#D5A329]/[0.06] blur-3xl" />
                <div className="relative mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D5A329]/25 bg-gradient-to-b from-[#D5A329]/15 to-transparent shadow-gold transition-shadow duration-500 group-hover:shadow-gold-lg">
                  <span className="gold-text text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#F3EEE7] mb-3">{item.title}</h3>
                <p className="text-[#A99B8C] leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-[#D5A329]/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B0E0A]/70 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Наши гарантии</h2>
            <p className="section-subtitle mt-4">Что вы получаете, работая с нами</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Конфиденциальность',
                desc: 'Гарантируем полную конфиденциальность ваших данных и коммерческой информации',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
              },
              {
                title: 'Оперативность',
                desc: 'Соблюдаем сроки и всегда на связи для решения срочных вопросов',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
              {
                title: 'Команда профессионалов',
                desc: 'Опытные специалисты с профильным образованием и многолетним стажем',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                className={`card-dark-hover group relative overflow-hidden p-8 text-center ${i === 1 ? 'md:-mt-6' : ''}`}
              >
                <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-32 w-48 rounded-full bg-[#D5A329]/[0.06] blur-3xl" />
                <div className="relative mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D5A329]/20 bg-gradient-to-b from-[#D5A329]/12 to-transparent transition-shadow duration-500 group-hover:shadow-gold">
                  <svg className="h-8 w-8 text-[#E4BD55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#F3EEE7] mb-3">{item.title}</h3>
                <p className="text-[#A99B8C] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us + CTA */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B0E0A]/70 to-[#1B0E0A]/40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Почему выбирают нас</h2>
            <div className="mx-auto mt-6 h-[3px] w-20 rounded-full gold-bg shadow-gold" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Надежность',
                desc: '20+ лет успешной работы на рынке',
                bg: 'gold-bg',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
              },
              {
                title: 'Гарантия',
                desc: '100% конфиденциальность и качество',
                bg: 'gold-bg-warm',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
              },
              {
                title: 'Оперативность',
                desc: 'Быстрое решение ваших задач',
                bg: 'gold-bg-deep',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className={`card-dark-hover group relative overflow-hidden p-8 text-center ${i === 1 ? 'md:-mt-4' : ''}`}
              >
                <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-32 w-48 rounded-full bg-[#D5A329]/[0.07] blur-3xl" />
                <div className={`relative mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl ${item.bg} shadow-gold transition-shadow duration-500 group-hover:shadow-gold-lg`}>
                  <svg className="h-10 w-10 text-[#120907]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#F3EEE7] mb-2">{item.title}</h3>
                <p className="text-[#A99B8C]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative overflow-hidden rounded-[2rem] shadow-lux"
          >
            <div className="absolute inset-0 bg-[#1B0E0A]" />
            <div className="absolute inset-0 bg-dark-glow" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-[#D5A329]/10 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 gold-border rounded-[2rem]" />
            <div className="absolute inset-4 rounded-[1.6rem] border border-white/5 pointer-events-none" />
            <div className="relative p-12 md:p-16 text-center">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F3EEE7] mb-6">Готовы начать сотрудничество?</h3>
              <p className="text-xl text-[#A99B8C] mb-10 max-w-2xl mx-auto leading-relaxed">
                Выберите интересующее направление и узнайте больше о наших услугах
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <Link
                  href="/accounting"
                  className="group relative inline-flex items-center overflow-hidden rounded-xl px-10 py-4 shadow-gold transition-all duration-500 hover:-translate-y-0.5 hover:shadow-gold-lg"
                >
                  <div className="absolute inset-0 gold-bg-warm" />
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                  <span className="relative text-[#120907] font-bold text-lg">Бухгалтерские услуги</span>
                  <svg className="relative w-5 h-5 ml-3 text-[#120907] transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/legal"
                  className="group relative inline-flex items-center overflow-hidden rounded-xl px-10 py-4 shadow-gold transition-all duration-500 hover:-translate-y-0.5 hover:shadow-gold-lg"
                >
                  <div className="absolute inset-0 gold-bg-deep" />
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                  <span className="relative text-[#120907] font-bold text-lg">Юридические услуги</span>
                  <svg className="relative w-5 h-5 ml-3 text-[#120907] transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
