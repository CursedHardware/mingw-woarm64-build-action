import type { Configuration } from 'webpack'

const configuration: Configuration = {
  mode: 'production',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: require.resolve('ts-loader'),
        exclude: /node_modules/,
      },
    ],
  },
}

export default configuration
