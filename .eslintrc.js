// eslint-config-prettier
// ESLintとprettierの処理で重複する項目について無効化してくれる

// eslint-plugin-prettier
// prettierで設定できるルールをESLintのルールとして処理できるようにする

module.exports = {
  // TSをESLintで解釈できるようにするparser
  parser: "@typescript-eslint/parser",

  // TS対応
  plugins: ["@typescript-eslint"],

  // extends にて、プラグインが提供する推奨設定を指定できます。
  extends: [
    // eslint 推奨ルール
    "eslint:recommended",

    // eslint-plugin-prettier 推奨設定
    "plugin:prettier/recommended",

    // TypeScriptでチェックされる項目を除外する設定
    "plugin:@typescript-eslint/eslint-recommended",
    // typescript-eslint 推奨設定
    "plugin:@typescript-eslint/recommended",

    // ESLintにないTS固有のルールを担う
    "prettier/@typescript-eslint",

    // react用ルール
    "plugin:react/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },

  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    // ts-lintとの差分吸収
    "@typescript-eslint/explicit-function-return-type": 0,

    // ts-lintとの差分吸収
    "@typescript-eslint/explicit-member-accessibility": 0
  },
  overrides: [
    { // TS と props の警告
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": 0
      }
    }
  ]
};
