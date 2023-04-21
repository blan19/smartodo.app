module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  singleQuote: true,
  arrowParens: "always",
  importOrder: [
    "^@(smartodo|ee)/(.*)$",
    "^@lib/(.*)$",
    "^@components/(.*)$",
    "^~/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  endOfLine: "auto",
};
