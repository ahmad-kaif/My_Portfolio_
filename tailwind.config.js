/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'beige-primary': '#F5EFE7',
      'beige-secondry': '#D8C4B6',
      'black': '#000000',
    },
    variants: {
      extend: {
        backgroundColor: ['hover'],
      },
  },
  plugins: [],
}
}