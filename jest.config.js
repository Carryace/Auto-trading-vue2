module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/src/**/*.spec.{ts,js}'],
  moduleFileExtensions: ['js', 'vue', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/file.mock.ts',
  },
  modulePathIgnorePatterns: ['<rootDir>/build'],
  verbose: false,
  bail: false,
  testURL: 'http://localhost/',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,vue}',
    'src/utils/**/*.{js,vue}',
    '!src/**/mixins/**/*',
  ],
  transform: {
    'vee-validate/dist/rules': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!vee-validate/dist/rules)',
  ],
};
