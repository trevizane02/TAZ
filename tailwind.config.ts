import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        base: '#f7f8fb',
        ink: '#0c111d',
        navy: '#001662',
        steel: '#8a92a6',
        accent: '#CB3444',
        accentLight: '#e85c6c',
        gold: '#d6b977',
        border: 'hsl(214 32% 91%)',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.6), transparent 35%), radial-gradient(circle at 90% 0%, rgba(0,83,255,0.35), transparent 50%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(203, 52, 68, 0.3)',
        'glow-lg': '0 0 60px rgba(203, 52, 68, 0.4)',
        'xl': '0 20px 60px rgba(0, 0, 0, 0.1)',
        '2xl': '0 30px 80px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    }
  },
  plugins: []
};

export default config;
