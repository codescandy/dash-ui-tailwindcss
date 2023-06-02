/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend:
    {
      colors:
      {
        // transparent: 'transparent',
        // current: 'currentColor',
        'indigo': {
          '50': '#f3f2ff',
          '100': '#e8e8ff',
          '200': '#d4d5ff',
          '300': '#b4b1ff',
          '400': '#8e85ff',
          '500': '#624bff',
          '600': '#5630f7',
          '700': '#481ee3',
          '800': '#3b18bf',
          '900': '#32169c',
          '950': '#1c0b6a',
      },





      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
