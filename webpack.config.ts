import { resolve } from 'path'

import { BuildEnv, BuildPaths, buildWebpackConfig } from './config/build'

// eslint-disable-next-line import/no-anonymous-default-export
export default (env: BuildEnv) => {
  const mode = env?.mode || 'development'
  const port = env?.port || 3000
  const isDev = mode === 'development'

  const paths: BuildPaths = {
    entry: resolve(__dirname, 'src', 'app', 'entrypoint', 'index.tsx'),
    build: resolve(__dirname, 'dist'),
    html: resolve(__dirname, 'index.html'),
    src: resolve(__dirname, 'src')
  }

  return buildWebpackConfig({
    mode,
    port,
    isDev,
    paths
  })
}
