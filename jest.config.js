/** @type {import('jest').Config} */

module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,vue}', '!**/*.stories.js'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ['vue', 'js', 'json'],
  transformIgnorePatterns: ['/node_modules/.*'],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
};
