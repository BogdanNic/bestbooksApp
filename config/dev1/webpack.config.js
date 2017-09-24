// var path = require('path');
// var webpack = require('webpack');
// var ionicWebpackFactory = require(process.env.IONIC_WEBPACK_FACTORY);
//
// var ModuleConcatPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
//
// var prodPlugins = [];
// if (process.env.IONIC_ENV === 'prod') {
//   prodPlugins.push(new ModuleConcatPlugin());
// }
// console.log(process.env.IONIC_ENV);
// console.log(process.env.NODE_ENV);
//
//
// module.exports = {
//   entry: process.env.IONIC_APP_ENTRY_POINT,
//   output: {
//     path: '{{BUILD}}',
//     publicPath: 'build/',
//     filename: '[name].js',
//     devtoolModuleFilenameTemplate: ionicWebpackFactory.getSourceMapperFunction(),
//   },
//   devtool: process.env.IONIC_SOURCE_MAP_TYPE,
//
//   resolve: {
//     extensions: ['.ts', '.js', '.json'],
//     modules: [path.resolve('node_modules')]
//   },
//
//   module: {
//     loaders: [
//       {
//         test: /\.json$/,
//         loader: 'json-loader'
//       },
//       {
//         test: /\.ts$/,
//         loader: process.env.IONIC_WEBPACK_LOADER
//       },
//       {
//         test: /\.js$/,
//         loader: process.env.IONIC_WEBPACK_TRANSPILE_LOADER
//       }
//     ]
//   },
//
//   plugins: [
//     ionicWebpackFactory.getIonicEnvironmentPlugin(),
//     ionicWebpackFactory.getCommonChunksPlugin(),
//     new webpack.DefinePlugin({
//       webpackGlobalVars: {
//         foo: JSON.stringify(fooConfig),
//         baz: JSON.stringify(bazConfig)
//       }
//     }),
//     new webpack.EnvironmentPlugin({
//       NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
//       DEBUG: false,
//       bogdan:"true",
//       org:"123"
//     })
//   ].concat(prodPlugins),
//
//   // Some libraries import Node modules but don't use them in the browser.
//   // Tell Webpack to provide empty mocks for them so importing them works.
//   node: {
//     fs: 'empty',
//     net: 'empty',
//     tls: 'empty'
//   }
// };
const webpackConfig = require('../../node_modules/@ionic/app-scripts/config/webpack.config');
const webpack = require('webpack');
const path = require('path');
const ENV = process.env.IONIC_ENV;
const currentDirectory = path.basename(__dirname);
const envConfigFile = require(`../../config/${currentDirectory}/config-${ENV}.json`);
//const apiBaseConfig = envConfigFile.API_BASE;

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    webpackGlobalVars: {
      API_BASE: JSON.stringify(envConfigFile.API_BASE),
    }
  })
);
