import { dirname, join } from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export default [
  {
    name: 'umd',
    entry: './src/index.ts',
    output: {
      filename: join( dirname( import.meta.url ), '/dist/umd/index.min.js' )
    },
    target: 'web',
    mode: 'production',
    devtool: false,
    optimization: {
      minimizer: [
        new TerserPlugin( {
          test: /\.js(\?.*)?$/i,
          extractComments: false,
          terserOptions: { mangle: true, sourceMap: false }
        } )
      ]
    },
    resolve: {
      extensions: [ '.ts', '.js' ],
      modules: [ 'node_modules' ],
    },
    module: {
      rules: [
        {
          test: /\.ts$/i,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            configFile: 'tsconfig.umd.json'
          }
        },
      ],
    }
  }
];