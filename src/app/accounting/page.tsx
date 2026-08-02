'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export default function AccountingPage() {
  const services = [
    {
      title: "Бухгалтерское сопровождение",
      description: "Полное ведение бухгалтерского учета вашей компании: от первичной документации до сдачи отчетности",
      features: [
        "Ведение первичной документации",
        "Расчет заработной платы",
        "Кадровый учет",
        "Подготовка и сдача отчетности"
      ]
    },
    {
      title: "Налоговый учет и оптимизация",
      description: "Профессиональная оптимизация налогообложения в рамках закона, минимизация рисков и расходов",
      features: [
        "Расчет налогов",
        "Налоговое планирование",
        "Оптимизация налоговой нагрузки",
        "Сдача налоговой отчетности"
      ]
    },
    {
      title: "Восстановление учета",
      description: "Профессиональное восстановление бухгалтерского и налогового учета любой сложности",
      features: [
        "Анализ документации",
        "Восстановление первичных документов",
        "Корректировка учетных данных",
        "Подготовка уточненной отчетности"
      ]
    }
  ];

  const prices = [
    {
      title: "ИП на УСН",
      price: "от 10 000 ₽/мес",
      features: [
        "Ведение бухгалтерского учёта",
        "Расчет налогов",
        "Подготовка и сдача отчётности",
        "Консультации по учёту"
      ]
    },
    {
      title: "ООО на УСН",
      price: "от 15 000 ₽/мес",
      features: [
        "Полное бухгалтерское сопровождение",
        "Расчет заработной платы",
        "Кадровый учёт",
        "Налоговая отчетность"
      ]
    },
    {
      title: "ООО на ОСНО",
      price: "от 20 000 ₽/мес",
      features: [
        "Комплексное бухгалтерское обслуживание",
        "Налоговое планирование",
        "Управленческий учёт",
        "Консультации по учёту"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#1a100c] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-dark-glow" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-card-hover"
              >
                <Image
                  src="/buh.jpg"
                  alt="Бухгалтер"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a100c]/30 to-transparent" />
                <div className="absolute inset-0 gold-border rounded-3xl" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-block mb-6">
                  <span className="text-sm tracking-[0.2em] uppercase text-amber-400/70 font-medium">Бухгалтерские услуги</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Профессиональные бухгалтерские услуги для вашего бизнеса
                </h1>
                <p className="text-xl text-[#d9ccb8] font-medium leading-relaxed">
                  Доверьте ваш бухгалтерский учет профессионалам с многолетним опытом. 
                  Мы поможем оптимизировать налоги и обеспечим полное соответствие законодательству.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const isLastOdd = services.length % 2 === 1 && index === services.length - 1;
              return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${isLastOdd ? 'md:col-span-2 max-w-3xl mx-auto w-full' : ''} card-dark-hover p-8`}
              >
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-amber-400/10 flex items-center justify-center">
                    <span className="text-amber-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="ml-5 text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-[#d9ccb8] text-lg mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-[#d9ccb8]">
                      <svg className="w-5 h-5 text-amber-400/60 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              );
            })}
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Тарифы на обслуживание</h2>
            <p className="section-subtitle mt-4">Выберите подходящий тариф для вашего бизнеса</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((price, index) => (
              <motion.div
                key={price.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-dark-hover p-8 text-center flex flex-col relative overflow-hidden"
              >
                <div className={['absolute top-0 left-0 w-full h-1 rounded-t-2xl', index === 0 ? 'gold-bg-warm' : index === 1 ? 'gold-bg' : 'gold-bg-deep'].join(' ')} />

                <div className="mb-6">
                  <div className={`inline-block rounded-full px-6 py-2 text-lg font-bold ${index === 0 ? 'gold-bg-warm text-[#1a100c]' : index === 1 ? 'gold-bg text-[#1a100c]' : 'gold-bg-deep text-[#1a100c]'}`}>
                    {price.title}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-8">{price.price}</div>
                <ul className="space-y-4 text-left flex-1">
                  {price.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-[#d9ccb8]">
                      <svg className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${index === 1 ? 'text-amber-400' : 'text-[#3d322b]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-dark-hover p-8 text-center"
          >
            <h2 className="section-title">Остались вопросы?</h2>
            <p className="text-[#d9ccb8] text-lg mb-8">
              Оставьте заявку на консультацию, и мы свяжемся с вами в ближайшее время
            </p>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </motion.div>
        </section>

        {/* Phone CTA */}
        <section className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-dark-hover p-10 text-center"
          >
            <h2 className="section-title">Нужна срочная консультация?</h2>
            <p className="text-[#d9ccb8] text-lg mb-8">
              Позвоните нам прямо сейчас
            </p>
            <Link 
              href="tel:+79991234567"
              className="group relative inline-flex items-center px-10 py-5 rounded-xl overflow-hidden shadow-gold hover:shadow-gold-lg transition-shadow duration-300"
            >
              <div className="absolute inset-0 gold-bg-warm" />
              <svg className="relative w-5 h-5 mr-3 text-[#1a100c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative text-[#1a100c] font-bold text-lg">Позвонить нам</span>
            </Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
