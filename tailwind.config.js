/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'newspagePhoto': "url('/news-page-components/photo1.png')"
      }
    },
  },
  plugins: [],
}

