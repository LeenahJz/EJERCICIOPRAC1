/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: '#4caf50', // Verde para botones o encabezados
      secondary: '#ff9800', // Naranja para acentos
      background: '#f4f4f4', // Color del fondo
      textPrimary: '#333333', // Color principal de texto
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Reemplaza la fuente predeterminada
      },
    },
  },
  plugins: [],
}

