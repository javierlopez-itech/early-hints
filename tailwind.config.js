/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /(text|bg)-(slate|gray|zinc|neutral|stone|orange|red|green|blue|orange)-(50|100|200|300|400|500|600|700|800|900)/, // You can display all the colors that you need
      variants: ['lg', 'hover', 'focus', 'lg:hover'],      // Optional
    },
  ],
  plugins: [
    require('flowbite/plugin')
]
}

