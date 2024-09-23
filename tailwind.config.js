/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'accent-primary': '#5F6F52',
        'accent-secondary': '#7E1100',
        'neutral-light1': '#EBE3D6',
        'neutral-light2': '#F7F4EF',
        'neutral-dark1': '#262924',
        'neutral-dark2': '#B99470',
      },
      fontFamily: {
        'default': ['josefin-sans', 'sans-serif'], // Add custom font and fallback
        'handwritten': ['babylonica', 'cursive'],
        'polaroid-handwritten': ['bestfriendSignature', 'cursive']
      },
      padding:
      {
        'site': '10%',
        'siteMobile': '0%',
        'siteWide': '15%',
        'siteUltraWide': '20%',
        'siteXl': '8%',
        'siteLg': '6%'
      },
      dropShadow: {
        'accent-primary-bold[disabled]': ['1px 0 0 theme("colors.accent-secondary")',
          '-1px 0 0 theme("colors.accent-secondary")',
          '0 1px 0 theme("colors.accent-secondary")',
          '0 -1px 0 theme("colors.accent-secondary")']
      },
    },
  },
  plugins: [],
}

