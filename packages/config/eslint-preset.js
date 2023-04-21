/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["next", "plugin:prettier/recommended", "turbo"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    project: ["./apps/*/tsconfig.json", "./packages/*/tsconfig.json"],
  },
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "@next/next/no-img-element": "off",
    "@next/next/no-html-link-for-pages": "off",
    "jsx-a11y/role-supports-aria-props": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],
    "react/self-closing-comp": ["error", { component: true, html: true }],
  },
};
