// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  ...require("../../jest.config"),
  setupFilesAfterEnv: ["./lib/setupEnzyme.ts"]
};
