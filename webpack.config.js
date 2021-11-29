module.exports = {
    entry : './src/index.js',
    output: {
    // Write to the '/dist' directory relative to the directory
    // where `webpack` is running
    path: `${process.cwd()}/dist`,
    // Webpack will bundle `src/foo.js` into `dist/foo.min.js`
    // because of `[name]`.
    filename: 'bundle.js'
  },
  target: 'node'
}