const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};