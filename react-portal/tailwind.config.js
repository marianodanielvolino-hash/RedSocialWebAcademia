/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        papel: '#F7F1E7',
        'papel-soft': '#FFFAF2',
        arena: '#E4D8C4',
        'arena-soft': '#EFE6D6',
        tierra: '#33281F',
        umber: '#2E2117',
        magenta: '#ED1686',
        naranja: '#FF9E19',
        cobre: '#D98A3D',
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      boxShadow: {
        marca: '0 14px 32px rgba(237, 22, 134, 0.28)',
        suave: '0 12px 28px rgba(46, 33, 23, 0.08)',
      },
      borderRadius: {
        marca: '18px',
      },
      backgroundImage: {
        'frs-grad': 'linear-gradient(135deg, #ED1686 0%, #FF9E19 100%)',
      }
    },
  },
  plugins: [],
}
