// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const MODE = process.ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode: MODE,
  entry: './src/index.tsx',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      'app-constants': path.resolve(__dirname, 'src/constants'),
      'app-history': path.resolve(__dirname, 'src/history'),
      'components': path.resolve(__dirname, 'src/components'),
      'selectors': path.resolve(__dirname, 'src/selectors'),
      'store': path.resolve(__dirname, 'src/store'),
      'actions': path.resolve(__dirname, 'src/actions'),
      'reducers': path.resolve(__dirname, 'src/reducers'),
      'sagas': path.resolve(__dirname, 'src/sagas'),
      'modules': path.resolve(__dirname, 'src/modules'),
      'utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],

  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 8080,
    inline: true,
    historyApiFallback: true,
  },
}
