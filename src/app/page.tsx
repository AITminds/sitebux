'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1a100c]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-glow" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-400/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <span className="text-sm tracking-[0.2em] uppercase text-amber-400/70 font-medium">BuxLegal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Профессиональные </span>
              <span className="gold-text">бухгалтерские</span>
              <span className="text-white"> и </span>
              <span className="gold-text">юридические</span>
              <span className="text-white"> услуги</span>
            </h1>
            <p className="text-xl text-[#d9ccb8] leading-relaxed max-w-2xl mx-auto">
              Доверьте ваш бизнес профессионалам с многолетним опытом
            </p>
            <div className="grid md:grid-cols-2 gap-10 pt-8">
              <Link href="/accounting" className="group block">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden gold-border group-hover:scale-[1.02] transition-all duration-500">
                  <Image src="/calculator.jpg" alt="Бухгалтерские услуги" fill sizes="50vw" className="object-cover transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a100c]/95 via-[#1a100c]/20 to-transparent" />
                  <div className="absolute inset-0 bg-[#1a100c]/30 backdrop-blur-[2px] group-hover:backdrop-blur-[1px] transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-[#d9ccb8] text-lg leading-relaxed mb-3">
                      Полное бухгалтерское сопровождение вашего бизнеса, налоговая отчетность и оптимизация
                    </p>
                    <div className="inline-flex items-center text-amber-400 group-hover:text-amber-300 font-semibold transition-colors">
                      Подробнее
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mt-5 text-center">Бухгалтерские услуги</h2>
              </Link>
              <Link href="/legal" className="group block">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden gold-border group-hover:scale-[1.02] transition-all duration-500">
                  <Image src="/hammer.jpg" alt="Юридические услуги" fill sizes="50vw" className="object-cover transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a100c]/95 via-[#1a100c]/20 to-transparent" />
                  <div className="absolute inset-0 bg-[#1a100c]/30 backdrop-blur-[2px] group-hover:backdrop-blur-[1px] transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-[#d9ccb8] text-lg leading-relaxed mb-3">
                      Правовая поддержка бизнеса, договорная работа и представительство в суде
                    </p>
                    <div className="inline-flex items-center text-amber-400 group-hover:text-amber-300 font-semibold transition-colors">
                      Подробнее
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mt-5 text-center">Юридические услуги</h2>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Directions */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a100c] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Основные направления</h2>
            <div className="w-24 h-1 gold-bg mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="card-dark-hover p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 gold-bg rounded-full mr-4" />
                Бухгалтерское сопровождение
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-[#d9ccb8] text-lg">
                  <svg className="w-5 h-5 text-amber-400/60 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ведение бухгалтерского учета
                </li>
                <li className="flex items-center text-[#d9ccb8] text-lg">
                  <svg className="w-5 h-5 text-amber-400/60 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Налоговая отчетность
                </li>
                <li className="flex items-center text-[#d9ccb8] text-lg">
                  <svg className="w-5 h-5 text-amber-400/60 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Расчет заработной платы
                </li>
                <li className="flex items-center text-[#d9ccb8] text-lg">
                  <svg className="w-5 h-5 text-amber-400/60 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Оптимизация налогообложения
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="card-dark-hover p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 gold-bg rounded-full mr-4" />
                Юридическое сопровождение
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-[#d9ccb8] text-lg">
                  <svg className="w-5 h-5 text-amber-400/60 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Регистрация и ликвидация компаний
                </li>
                <li className="flex items-center text-[#d9ccb8] text-lg">
                  <svg className="w-5 h-5 text-amber-400/60 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Договорное право
                </li>
                <li className="flex items-center text-[#d9ccb8] text-lg">
                  <svg className="w-5 h-5 text-amber-400/60 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Представительство в суде
                </li>
                <li className="flex items-center text-[#d9ccb8] text-lg">
                  <svg className="w-5 h-5 text-amber-400/60 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Корпоративное право
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a100c] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-dark-hover p-8 text-center relative group"
              >
                <div className="w-16 h-16 rounded-2xl gold-bg-warm flex items-center justify-center mx-auto mb-6 shadow-gold text-[#1a100c] font-bold text-2xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#c4b8a8]">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-amber-400/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a100c] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Наши гарантии</h2>
            <p className="section-subtitle mt-4">Что вы получаете, работая с нами</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-dark-hover p-8 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Конфиденциальность</h3>
              <p className="text-[#c4b8a8] leading-relaxed">Гарантируем полную конфиденциальность ваших данных и коммерческой информации</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-dark-hover p-8 text-center md:-mt-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Оперативность</h3>
              <p className="text-[#c4b8a8] leading-relaxed">Соблюдаем сроки и всегда на связи для решения срочных вопросов</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-dark-hover p-8 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Команда профессионалов</h3>
              <p className="text-[#c4b8a8] leading-relaxed">Опытные специалисты с профильным образованием и многолетним стажем</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us + CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a100c] to-[#1a100c]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Почему выбирают нас</h2>
            <div className="w-24 h-1 gold-bg mx-auto mt-4 rounded-full" />
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-dark-hover p-8 text-center"
            >
              <div className="w-20 h-20 rounded-2xl gold-bg flex items-center justify-center mx-auto mb-6 shadow-gold">
                <svg className="w-10 h-10 text-[#1a100c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">Надежность</h3>
              <p className="text-[#c4b8a8]">15+ лет успешной работы на рынке</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-dark-hover p-8 text-center md:-mt-4"
            >
              <div className="w-20 h-20 rounded-2xl gold-bg-warm flex items-center justify-center mx-auto mb-6 shadow-gold">
                <svg className="w-10 h-10 text-[#1a100c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">Гарантия</h3>
              <p className="text-[#c4b8a8]">100% конфиденциальность и качество</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-dark-hover p-8 text-center"
            >
              <div className="w-20 h-20 rounded-2xl gold-bg-deep flex items-center justify-center mx-auto mb-6 shadow-gold">
                <svg className="w-10 h-10 text-[#1a100c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">Оперативность</h3>
              <p className="text-[#c4b8a8]">Быстрое решение ваших задач</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-[#241814] border border-amber-400/10 rounded-3xl" />
            <div className="absolute inset-0 gold-border rounded-3xl" />
            <div className="absolute inset-0 bg-dark-glow rounded-3xl" />
            <div className="relative p-12 md:p-16 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Готовы начать сотрудничество?</h3>
              <p className="text-xl text-[#d9ccb8] mb-10 max-w-2xl mx-auto">
                Выберите интересующее направление и узнайте больше о наших услугах
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <Link 
                  href="/accounting"
                  className="group relative inline-flex items-center px-10 py-4 rounded-xl overflow-hidden shadow-gold hover:shadow-gold-lg transition-shadow duration-300"
                >
                  <div className="absolute inset-0 gold-bg-warm" />
                  <span className="relative text-[#1a100c] font-bold text-lg">Бухгалтерские услуги</span>
                  <svg className="relative w-5 h-5 ml-3 text-[#1a100c] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/legal"
                  className="group relative inline-flex items-center px-10 py-4 rounded-xl overflow-hidden shadow-gold hover:shadow-gold-lg transition-shadow duration-300"
                >
                  <div className="absolute inset-0 gold-bg-deep" />
                  <span className="relative text-[#1a100c] font-bold text-lg">Юридические услуги</span>
                  <svg className="relative w-5 h-5 ml-3 text-[#1a100c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
