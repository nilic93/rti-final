const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

const { isLocal } = slsw.lib.webpack;

module.exports = {
  mode: isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  target: 'node',
  externals: [],
  watch: false,
  devtool: 'source-map',
  resolve: {
    extensions: ['.json', '.ts', '.js'],
  },
  module: {
    rules: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.serverless'),
            path.resolve(__dirname, '.webpack'),
            path.resolve(__dirname, 'build'),
          ],
        ],
      },
    ],
  },
  plugins: [],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  optimization: {
    minimize: false,
  },
};
