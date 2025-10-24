import typography from "@tailwindcss/typography"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {
    keyframes: {
      'fade-in' : {
        '0%': { opacity: '0'},
        '100%': { opacity: '1'}
      },
      'slade-in': {
        '0%': { transform: 'transladeX(100%)'},
        '100%': { transform: 'transladeX(0)'}
      }
      ,
      'slade-in-left': {
        '0%': { transform: 'transladeX(-100%)'},
        '100%': { transform: 'transladeX(0)'}
      }
    },
    amination: {
      'fade-in'       : "fade-in 0.3s ease-out",
      'slade-in'      : "slade-in 0.3s ease-out",
      'slade-in-left' : "slade-in-left 0.3s ease-out",
    }
  } },
  plugins: [typography],
}

export default config
