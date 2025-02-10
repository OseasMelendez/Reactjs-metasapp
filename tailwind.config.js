// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        "sm-custom": "8px",
        "md-custom": "16px",
        "lg-custom": "24px",
        "xl-custom": "48px",
        "principal": "505px",
      },
    },
    plugins: [],
  };
  