'use client';

import React from 'react';
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
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ContactForm(props: ContactFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);
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
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="relative bg-[#241814] rounded-[2rem] p-8 border border-[#3d322b]/50 shadow-card">
          <div className="absolute inset-0 rounded-[2rem] bg-dark-glow pointer-events-none" />
          <div className="relative space-y-6">
            {formFields.map((field) => (
              <motion.div 
                key={field.name}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
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
                    className={`w-full text-lg px-6 py-4 bg-white/[0.04] rounded-xl
                             border transition-all duration-300 outline-none
                             ${field.error 
                               ? 'border-red-400/50 focus:border-red-400 hover:border-red-400/80' 
                               : 'border-[#3d322b] hover:border-amber-400/30 focus:border-amber-400/60'}
                             text-white placeholder-[#c4b8a8]
                             group-hover:shadow-gold group-focus-within:shadow-gold`}
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
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="relative group">
                <textarea
                  {...register('message', { required: true })}
                  className={`w-full text-lg px-6 py-4 bg-white/[0.04] rounded-xl
                           border transition-all duration-300 outline-none
                           resize-none h-32
                           ${errors.message 
                             ? 'border-red-400/50 focus:border-red-400 hover:border-red-400/80' 
                             : 'border-[#3d322b] hover:border-amber-400/30 focus:border-amber-400/60'}
                           text-white placeholder-[#c4b8a8]
                           group-hover:shadow-gold group-focus-within:shadow-gold`}
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
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-4 text-lg font-medium overflow-hidden
                       rounded-xl transition-shadow duration-300 group
                       shadow-gold hover:shadow-gold-lg"
            >
              <div className="absolute inset-0 gold-bg-warm transition-transform duration-300 group-hover:scale-[1.02]" />
              <span className="relative text-[#1a100c] font-bold">Отправить</span>
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
