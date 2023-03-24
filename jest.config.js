export default {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'] }],
    },
    moduleNameMapper: {
        "\\.(pdf)$": "<rootDir>/__mocks__/fileMock.js"
      },
      testEnvironment: "jsdom"
  };
