import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(() => {
  const isCI = process.env.GITHUB_ACTIONS === 'true'
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
  const base = isCI && repo ? `/${repo}/` : '/'
  return {
    plugins: [react()],
    base,
  }
})
