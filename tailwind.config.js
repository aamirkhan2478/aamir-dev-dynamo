/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeColor: "#ff6b00",
        darkColor: "#3c3a39",
        blueColor: "#091e42",
        blackColor: "#1c1a19",
      },
      fontFamily: {
        crete: ["Crete Round", "serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        profile: "url('/public/profile-pic.jpg')",
        mainImage: "url('/public/main-image.svg')",
        mainImageDesktop: "url('/public/main-image-desktop.png')",
      },
    },
  },
  plugins: [],
};
