import { resolve } from 'path'

import { BuildMode, BuildPaths, buildWebpackConfig } from './config/build'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const mode: BuildMode = (process.env.NODE_ENV as BuildMode) ?? 'development'
  const port = Number(process.env.PORT ?? 3000)
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
