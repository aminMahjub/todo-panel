/** @type {import('tailwindcss').Config} */
// plugins
const daisyui = require('daisyui');

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bricolageG-light": ["bricolageG-light", "Arial", "sans"],
        "bricolageG-regular": ["bricolageG-regular", "Arial", "sans"],
        "bricolageG-bold": ["bricolageG-bold", "Arial", "sans"],
        "bricolageG-extra-bold": ["bricolageG-extra-bold", "Arial", "sans"],
        
      }
    },
    
  },
 
  plugins: [daisyui],

  daisyui: {
    themes: ["night"]
  }
}


