/* eslint-disable */

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setUpTests.js"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
