module.exports = {
  "**/*.ts?(x)": [
    'yarn eslint --fix'
  ],
  "**/*.test.ts?(x)": [
    'yarn test --findRelatedTests',
  ],
  "**/*.js": 'yarn eslint --fix'
};
