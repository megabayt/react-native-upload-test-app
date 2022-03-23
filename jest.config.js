module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  setupFiles: [
    "<rootDir>/src/utils/setupTests.ts"
  ]
};