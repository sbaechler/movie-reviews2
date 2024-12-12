import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,  // adds auto cleanup to the globals scope
    environment: 'jsdom',
  },
})
