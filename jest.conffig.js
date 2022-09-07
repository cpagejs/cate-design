const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname),
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  // 别名
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/components/$1",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // 测试
  testMatch: ["<rootDir>/src/__tests__/**/*.spec.(ts|tsx|js)"],
  testPathIgnorePatterns: ["/node_modules/", "/stories/"],
  moduleFileExtensions: ["js", "json", "ts", "tsx"],

  transform: {
    "^.+\\.vue$": "vue-jest",
    "\\.scss$": "jest-transform-css",
    "^.+\\.(ts|tsx|js|jsx)$": [
      "babel-jest",
      {
        presets: [
          ["@babel/preset-env", { targets: { node: true } }],
          "@vue/babel-preset-jsx",
          "@babel/preset-typescript",
        ],
        plugins: [
          [
            "@vue/babel-plugin-jsx",
            { mergeProps: false, enableObjectSlots: false },
          ],
          [
            "@babel/plugin-proposal-decorators",
            {
              legacy: true,
            },
          ],
        ],
      },
    ],
  },
};
