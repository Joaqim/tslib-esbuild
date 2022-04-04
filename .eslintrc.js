module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["@programic/eslint-config-typescript", "prettier"],
  rules: {
    "max-classes-per-file": "warn",
    "padding-line-between-statements": "warn",
    "spaced-comment": "warn",
    "lines-between-class-members": "warn",
    "class-methods-use-this": "warn",
    "no-bitwise": "off",
    "no-param-reassign": "off",
    "id-length": "off",
    "prefer-const": "error",
    "no-const-assign": "error",
    quotes: "off",
    "@typescript-eslint/quotes": [
      "warn",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    "prettier/prettier": ["error"],
    "import/prefer-default-export": "off", // Allow single Named-export
    "unicorn/prevent-abbreviations": "warn",
  },
}
