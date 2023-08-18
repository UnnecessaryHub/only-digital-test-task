import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { BuildOptions } from '../types'

export const buildPlugins = (
  options: BuildOptions
): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new HTMLWebpackPlugin({ template: options.paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css'
    }),
    new CleanWebpackPlugin({
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ['*.LICENSE.txt']
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev)
    })
  ]

  const devPlugins = options.isDev
    ? [
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
          openAnalyzer: false
        })
      ]
    : []

  return plugins.concat(devPlugins)
}
