module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/src/**/*.spec.{ts,js}'],
  moduleFileExtensions: ['js', 'html', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/file.mock.ts',
  },
  modulePathIgnorePatterns: ['<rootDir>/build'],
  verbose: false,
  bail: false,
  testURL: 'http://localhost/',
  testPathIgnorePatterns: [
    'build',
    'dist',
    'scripts',
    'src/modules',
  ],
  coverageDirectory: './reports/coverage-app',
  collectCoverageFrom: [
    '!src/main.js',
    'src/**/*.vue',
    '!src/**/mock.js',
  ],
  coverageThreshold: {
    './src/': {
      lines: 70,
      statements: 70,
      functions: 70,
      branches: 70,
    },
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/src/tests',
    '<rootDir>/src/types',
    '<rootDir>/src/mocks',
    '<rootDir>/src/environments',
  ],
};
