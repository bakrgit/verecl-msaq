/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-rtlcss": {
      ltrPrefix: '[dir="rtl"]',
      rtlPrefix: '[dir="ltr"]'
    }
  }
};



export default config;
