/**@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Card.jsx",
    "./src/components/Imagecarousal.jsx",
    "./src/components/HomeNavbar.jsx",
    "./src/pages/Home/HomeUser.jsx",
    './src/components/ShowDetails.jsx'
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
  },
  plugins: [],
};
