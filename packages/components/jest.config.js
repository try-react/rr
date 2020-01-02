module.exports = {
  ...require("../../jest.config"),
  setupFilesAfterEnv: ["./lib/setupEnzyme.ts"]
};
