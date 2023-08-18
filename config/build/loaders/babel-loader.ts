import { RuleSetRule } from 'webpack'

interface BabelLoaderOptions {
  isTsx: boolean
}
const babelLoader = ({ isTsx }: BabelLoaderOptions) => {
  const babelPlugins = [
    [
      '@babel/plugin-transform-typescript',
      {
        isTsx
      }
    ],
    '@babel/plugin-transform-runtime'
  ]
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: babelPlugins
      }
    }
  }
}

export const babelLoaderWithTypescript = (): RuleSetRule[] => {
  return [babelLoader({ isTsx: true }), babelLoader({ isTsx: false })]
}
