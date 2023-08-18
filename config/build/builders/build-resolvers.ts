import { ResolveOptions } from 'webpack'

import { BuildOptions } from '../types'

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.scss', '.tsx', '.ts', '.js', '.json'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {
      '@': options.paths.src
    }
  }
}
