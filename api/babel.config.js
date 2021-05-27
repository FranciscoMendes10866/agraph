module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@db': './src/db',
        '@graphql': './src/graphql',
        '@guards': './src/guards',
        '@schema': './src/schema',
        '@utils': './src/utils'
      }
    }]
  ]
}
