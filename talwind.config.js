module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // React / Next.js
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",  // Next.js 13+
  ],
  theme: {
    extend: {
      colors: {
         'theme-golden': 'gold',  
      }
    }
  },
  plugins: [],
}