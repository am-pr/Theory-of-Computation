// import { Vazirmatn } from 'next/font/google'
import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryColor: '#F4CE14',
        primaryColorLight:'#ffe357',
        secondaryColor: '#5C8984',
        darkMediumColor:'#57595D',
        darkColor:'#45474B',
        lightColor:'#F5F7F8'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
