// prettier.config.js
const tailwindPlugin = require("prettier-plugin-tailwindcss");

module.exports = {
  singleQuote: false,
  bracketSpacing: true,
  semi: true,
  trailingComma: "none",
  printWidth: 120,
  tabWidth: 2,
  singleAttributePerLine: true,
  bracketSameLine: false,
  jsxSingleQuote: false,
  plugins: [
    {
      parsers: {
        typescript: {
          ...tailwindPlugin.parsers.typescript
        }
      }
    }
  ]
};
