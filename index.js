module.exports = {
  "root": true,
  "extends": ['standard-with-typescript'],
  "parserOptions": {
    "project": './tsconfig.json'
  },
  "ignorePatterns": ["dist/*"],
  "rules": {
    "import/extensions": "off",
    "linebreak-style": "off",
    "node/no-unsupported-features/es-syntax": "off",
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "comma-dangle": ["error", "always-multiline"],
    "max-len": "off"
  }
};
