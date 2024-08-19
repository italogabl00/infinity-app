/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'bebas': ['Bebas Neue', 'sans-serif'],
    },
    colors: {
      'inallblack': '#0C0B0B',
      'inblack': '#1c1919',
      'ingrey': '#292929',
      'inred': '#E53F2E',
      'inwhite': '#F8F8F8',
      'indred': '#FF2B23',
    },
    screens: {
      '4xl': { 'max': '3070px' },
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
      'sml': { 'max': '360px' },
    },
    minWidth: {
      'fvw': '100vw',
      'fhw': '100vh',
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '4/5': '80%',
      'xs': '20rem',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
      'xl': '36rem',
      '2xl': '42rem',
      'card-width': '100vh', // Defina a largura do card aqui
    },
    extend: {
      'fundo-test': './public/imagens/fundo.jpg'
    },
  },
  plugins: [],
}
