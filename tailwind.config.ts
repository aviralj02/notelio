import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {
        load: {
          '0%': {
            transform:' translateX(-150%)'
          },
          '50%': {
            transform: 'translateX(-60%)'
          },
          '100%': {
            transform: 'translateX(150%)'
          }
        }
      },
      animation: {
        loading: 'load 1s infinite'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
export default config
