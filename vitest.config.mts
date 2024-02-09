// @ts-ignore
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    environment: 'node',
    reporters: ['verbose'],
    coverage: {
      include: ['src/**/*.ts'],
      exclude: ['tests/**/*.ts'],
      reporter: ['lcov', "text", "html"],
      all: true,
      thresholds: {
        lines: 90,
        functions: 94,
        branches: 80,
        statements: 90,
      }
    },
  },
})
