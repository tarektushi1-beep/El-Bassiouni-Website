import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.worktrees/'],
  moduleNameMapper: {
    '^@sanity/image-url$': '<rootDir>/__mocks__/sanity/imageUrlBuilder.ts',
    '^@sanity/client$': '<rootDir>/__mocks__/sanity/client.ts',
    '@portabletext/react': '<rootDir>/__mocks__/portabletext/react.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

export default createJestConfig(config)
