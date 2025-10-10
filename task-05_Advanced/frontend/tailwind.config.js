/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./stories/**/*.{js,jsx,ts,tsx}",],
   darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
       animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-slower': 'spin 20s linear infinite',
      },
       keyframes: {
        slide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      
    },
  },
  plugins: [],
}
