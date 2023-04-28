import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  'packages/**/*.test.{ts,js}',
  'apps/**/*.test.{ts,js}',
]);
