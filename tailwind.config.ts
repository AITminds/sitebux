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
          base: '#1a100c',
          card: '#241814',
          elevated: '#2A1C17',
          hover: '#2F211B',
          border: '#3d322b',
        },
        gold: {
          dark: '#B7851C',
          mid: '#D8AA3D',
          light: '#F5DE8B',
          accent: '#D4A42E',
        },
        text: {
          primary: '#ffffff',
          secondary: '#d9ccb8',
          muted: '#c4b8a8',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold": "linear-gradient(135deg, #B7851C 0%, #D8AA3D 20%, #F5DE8B 40%, #D4A42E 60%, #B37A16 80%, #F7E3A0 100%)",
        "dark-glow": "radial-gradient(ellipse at center, rgba(183,133,28,0.06) 0%, transparent 70%)",
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(183,133,28,0.15)',
        'gold-lg': '0 8px 40px rgba(183,133,28,0.2)',
        'card': '0 2px 16px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(183,133,28,0.15)',
      },
    },
  },
  plugins: [
    formsPlugin,
  ],
};
export default config;
