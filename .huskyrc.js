module.exports = {
  hooks: {
    "pre-commit": "tsc && lint-staged",
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true'
  }
};
