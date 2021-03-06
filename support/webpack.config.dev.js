
module.exports = {
  name: 'default',
  entry: './lib/index.js',
  output: {
    library: 'io',
    libraryTarget: 'commonjs',
    filename: 'socket.io.dev.js'
  },
  externals: {
    global: glob()
  },
  node: {
    Buffer: false
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      include: /debug/,
      loader: 'babel-loader',
      query: { presets: ['es2015'] }
    }]
  }
};

/**
 * Populates `global`.
 *
 * @api private
 */

function glob () {
  return 'typeof self !== "undefined" ? self : ' +
    'typeof window !== "undefined" ? window : ' +
    'typeof global !== "undefined" ? global : {}';
}
