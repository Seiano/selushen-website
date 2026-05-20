import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B3A5C',
          50: '#E8EEF4',
          100: '#D1DEE9',
          200: '#A3BDD3',
          300: '#759CBD',
          400: '#477BA7',
          500: '#1B3A5C',
          600: '#162E4A',
          700: '#112338',
          800: '#0C1726',
          900: '#070C14',
        },
        accent: {
          DEFAULT: '#D4A84B',
          50: '#FAF5E8',
          100: '#F5EBD1',
          200: '#EBD7A3',
          300: '#E1C375',
          400: '#D7AF47',
          500: '#D4A84B',
          600: '#B08B35',
          700: '#8C6E29',
          800: '#68511D',
          900: '#443411',
        },
        fire: {
          DEFAULT: '#C0392B',
          50: '#FCEAE7',
          100: '#F9D5CF',
          200: '#F3AB9F',
          300: '#ED816F',
          400: '#E7573F',
          500: '#C0392B',
          600: '#962D22',
          700: '#6C2019',
          800: '#421410',
          900: '#180807',
        },
        whatsapp: '#25D366',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
};
export default config;
