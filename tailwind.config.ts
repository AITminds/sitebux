import type { Config } from "tailwindcss";
import formsPlugin from '@tailwindcss/forms';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          base: '#120907',
          card: '#24140D',
          elevated: '#2E1A11',
          hover: '#35221A',
          border: '#3A2418',
        },
        gold: {
          dark: '#B8860B',
          mid: '#D5A329',
          light: '#E4BD55',
          accent: '#D5A329',
          pale: '#F5E3AC',
        },
        text: {
          primary: '#F3EEE7',
          secondary: '#A99B8C',
          muted: '#8A7B6D',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold": "linear-gradient(135deg, #B8860B 0%, #D5A329 25%, #E4BD55 50%, #D5A329 75%, #B8860B 100%)",
        "dark-glow": "radial-gradient(ellipse at center, rgba(213,163,41,0.07) 0%, transparent 70%)",
      },
      boxShadow: {
        'gold': '0 6px 24px -6px rgba(213,163,41,0.35)',
        'gold-lg': '0 12px 44px -8px rgba(213,163,41,0.4)',
        'card': '0 8px 32px -8px rgba(0,0,0,0.5)',
        'card-hover': '0 16px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(213,163,41,0.18)',
        'lux': '0 32px 80px -32px rgba(0,0,0,0.8), 0 0 60px -24px rgba(213,163,41,0.25)',
      },
    },
  },
  plugins: [
    formsPlugin,
  ],
};
export default config;
