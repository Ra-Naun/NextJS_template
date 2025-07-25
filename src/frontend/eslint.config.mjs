import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    plugins: ["prettier"],
    extends: ["next", "prettier", "next/core-web-vitals", "next/typescript"],
    rules: {
      "@typescript-eslint/ban-ts-ignore": "off",

      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".ts", ".tsx"],
        },
      ],

      "no-use-before-define": "off",
      "no-extra-boolean-cast": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-use-before-define": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "no-console": "warn",
      "no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
        },
      ],

      "react/no-unescaped-entities": "warn",
      "react/jsx-key": "warn",
      "react/display-name": "warn",
      "react/prop-types": "warn",

      "lines-between-class-members": [
        "error",
        "always",
        {
          exceptAfterSingleLine: true,
        },
      ],

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      camelcase: "off",

      indent: [
        "warn",
        2,
        {
          SwitchCase: 1,
        },
      ],

      "linebreak-style": ["error", "unix"],
      quotes: ["warn", "double"],
      semi: ["error", "always"],

      "prettier/prettier": [
        "warn",
        {
          useTabs: false,
          tabWidth: 2,
          printWidth: 120,
          trailingComma: "es5",
          vueIndentScriptAndStyle: true,
        },
        {
          usePrettierrc: true,
        },
      ],
    },
  }),
];

export default eslintConfig;
