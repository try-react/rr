module.exports = {
  hooks: {
    "pre-commit": "tsc",
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true'
  }
};
