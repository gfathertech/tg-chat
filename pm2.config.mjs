export default {
  apps: [
    {
      name: 'amatullah',
      script: 'index.ts',
      interpreter: 'bun',
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
