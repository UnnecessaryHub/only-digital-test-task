import { RuleSetRule } from 'webpack'

import { babelLoader, imagesLoader, scssLoader } from '../loaders'
import { BuildOptions } from '../types'

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => [
  imagesLoader(),
  ...babelLoader(),
  scssLoader(options.isDev)
]
