module.exports = {
  "**/*.ts?(x)": [
    'yarn eslint --fix'
  ],
  "**/*.test.ts?(x)": [
    // yarn test にしたいが configパスの都合上 個別にする
    'yarn test:containers --findRelatedTests',
    'yarn test:components --findRelatedTests',
  ],
  "**/*.js": 'yarn eslint --fix'
};
