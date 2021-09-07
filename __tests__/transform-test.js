"use strict";

jest.autoMockOff();
const defineTest = require("jscodeshift/dist/testUtils").defineTest;

describe("lodash get to optional chaining", () => {
  describe("basic happy case scenario", () => {
    defineTest(__dirname, "transform");
  });
  describe("flags", () => {
    describe("typescript", () => {
      defineTest(
        __dirname,
        "transform",
        null,
        "typescript",
        { parser: 'ts' },
        { parser: 'ts' },
      );
    });
  });
});
