import { join, basename, dirname, resolve } from 'path';
import glob from 'glob';
import TerserPlugin from 'terser-webpack-plugin';

export default [

  // ---------------------------------------------------------------------------
  // CommonJS

  {
    name: 'cjs',
    entry: './src/index.ts',
    output: {
      filename: 'index.js',
      path: join( process.cwd(), 'dist/cjs' ),
      libraryTarget: 'commonjs2'
    },
    target: 'node',
    mode: 'production',
    devtool: false,
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
            compilerOptions: {
              target: 'ES5'
            },
            configFile: 'tsconfig.json'
          }
        },
      ],
    }
  },

  // ---------------------------------------------------------------------------
  // ES Module

  // {
  //   name: 'es',
  //   entry: {//entryPlus( entryFiles ),
  //     utils: {
  //       import: './src/utils.ts',
  //     },
  //     acceleration: {
  //       import: './src/units/acceleration.ts',
  //       dependOn: 'utils',
  //       filename: 'units/[name].js'
  //     },
  //   },
  //   output: {
  //     path: join( process.cwd(), 'dist/es' ),
  //     library: '[name]',
  //     libraryTarget: 'var',
  //   },
  //   target: 'web',
  //   mode: 'development',
  //   resolve: {
  //     extensions: [ '.ts', '.js', '.mjs' ],
  //   },
  //   optimization: {
  //     usedExports: true
  //   },
  //   plugins: [
  //     new EsmWebpackPlugin()
  //   ],
  //   module: {
  //     rules: [
  //       {
  //         test: /\.ts$/i,
  //         loader: 'ts-loader',
  //         options: {
  //           transpileOnly: true,
  //           experimentalWatchApi: true,
  //           compilerOptions: {
  //             target: 'ES6'
  //           },
  //           configFile: 'tsconfig.json'
  //         }
  //       },
  //     ],
  //   },
  //   stats: {
  //     errorDetails: true
  //   }
  // },

  // ---------------------------------------------------------------------------
  // UMD

  {
    name: 'umd',
    entry: {
      index: './src/index.ts',
    },
    output: {
      filename: 'index.min.js',
      path: join( process.cwd(), 'dist/umd' ),
      libraryTarget: 'umd'
    },
    target: 'web',
    mode: 'production',
    devtool: false,
    resolve: {
      extensions: [ '.ts', '.js' ],
      modules: [ 'node_modules' ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin( {
          test: /\.js(\?.*)?$/i,
          extractComments: false,
          terserOptions: { mangle: true, sourceMap: false }
        } )
      ]
    },
    module: {
      rules: [
        {
          test: /\.ts$/i,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            compilerOptions: {
              target: 'ES5'
            },
            configFile: 'tsconfig.json'
          }
        },
      ],
    }
  }
];