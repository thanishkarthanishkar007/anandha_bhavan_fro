import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'restaurant-green': '#4F8F24',
        'fresh-green': '#78B82A',
        'deep-green': '#173D19',
        'restaurant-yellow': '#F4C430',
        'golden-yellow': '#E7AE12',
        'cream': '#FFFBEA',
        'warm-white': '#FFFEF5',
        'leaf-green': '#2F6B20',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(23, 61, 25, 0.08), 0 0 1px 1px rgba(23, 61, 25, 0.05)',
        'premium-hover': '0 25px 50px -12px rgba(23, 61, 25, 0.15), 0 0 1px 1px rgba(79, 143, 36, 0.15)',
        'glow-yellow': '0 0 35px -5px rgba(244, 196, 48, 0.3)',
        'glow-green': '0 0 35px -5px rgba(79, 143, 36, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
