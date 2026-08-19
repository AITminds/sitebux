'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  theme?: 'legal' | 'accounting';
  recipientEmail: string;
};

export default function ContactForm({ theme = 'legal', recipientEmail }: ContactFormProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, theme, recipientEmail }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const formFields = [
    { name: 'name', type: 'text', placeholder: 'Ваше имя', error: errors.name },
    { name: 'email', type: 'email', placeholder: 'Email', error: errors.email },
    { name: 'phone', type: 'tel', placeholder: 'Телефон', error: errors.phone },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#1B0E0A]/70 backdrop-blur p-8 shadow-lux">
          <div className="absolute inset-0 bg-dark-glow pointer-events-none" />
          <div className="relative space-y-6">
            {formFields.map((field) => (
              <motion.div
                key={field.name}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative group">
                  <input
                    type={field.type}
                    {...register(field.name as keyof FormData, {
                      required: true,
                      ...(field.name === 'email' && {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Некорректный email адрес"
                        }
                      }),
                      ...(field.name === 'phone' && {
                        pattern: {
                          value: /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                          message: "Формат: +7 (999) 999-99-99"
                        }
                      })
                    })}
                    className={`w-full text-lg px-6 py-4 bg-[#120907]/50 rounded-xl
                             border transition-all duration-500 outline-none
                             ${field.error
                               ? 'border-red-400/50 focus:border-red-400 hover:border-red-400/80'
                               : 'border-[#3A2418] hover:border-[#D5A329]/30 focus:border-[#D5A329]/60'}
                             text-[#F3EEE7] placeholder-[#A99B8C]/70
                             focus:shadow-[0_0_0_4px_rgba(213,163,41,0.08)] focus:shadow-gold`}
                    placeholder={field.placeholder}
                  />
                </div>
                {field.error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute text-sm text-red-400 mt-1 ml-2"
                  >
                    {field.error.message || `Пожалуйста, введите ${field.placeholder.toLowerCase()}`}
                  </motion.p>
                )}
              </motion.div>
            ))}

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative group">
                <textarea
                  {...register('message', { required: true })}
                  className={`w-full text-lg px-6 py-4 bg-[#120907]/50 rounded-xl
                           border transition-all duration-500 outline-none
                           resize-none h-32
                           ${errors.message
                             ? 'border-red-400/50 focus:border-red-400 hover:border-red-400/80'
                             : 'border-[#3A2418] hover:border-[#D5A329]/30 focus:border-[#D5A329]/60'}
                           text-[#F3EEE7] placeholder-[#A99B8C]/70
                           focus:shadow-[0_0_0_4px_rgba(213,163,41,0.08)] focus:shadow-gold`}
                  placeholder="Сообщение"
                />
              </div>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute text-sm text-red-400 mt-1 ml-2"
                >
                  Пожалуйста, введите сообщение
                </motion.p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'loading'}
              className="relative w-full py-4 text-lg font-medium overflow-hidden
                       rounded-xl transition-shadow duration-500 group
                       shadow-gold hover:shadow-gold-lg
                       disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 gold-bg-warm transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
              <span className="relative text-[#120907] font-bold">
                {status === 'loading' ? 'Отправка...' : 'Отправить'}
              </span>
            </motion.button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-emerald-300/90 font-medium"
              >
                Заявка отправлена! Мы свяжемся с вами в ближайшее время.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-300/90 font-medium"
              >
                Не удалось отправить заявку. Попробуйте позже.
              </motion.p>
            )}
          </div>
        </div>
      </form>
    </motion.div>
  );
}
