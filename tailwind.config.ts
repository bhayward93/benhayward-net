import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8F00FF',
        secondary: '#B14EFF',
        tertiary: '#6D00C3',
        white: '#FFFFF0',
        black: '#010100'
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        "handwritten-regular": 'var(--font-handwritten-regular)',
        "heading-bold": 'var(--font-heading-bold)',
        "heading-medium": 'var(--font-heading-medium)',
        "heading-regular": 'var(--font-heading-regular)',
        "body-regular": 'var(--font-body-regular)'
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
