import { Configuration } from 'webpack'

import {
  buildDevServer,
  buildLoaders,
  buildPlugins,
  buildResolvers
} from './builders'
import { BuildOptions } from './types'

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode, isDev } = options
  return {
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.build,
      clean: true
    },
    mode,
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    module: {
      rules: buildLoaders(options)
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
