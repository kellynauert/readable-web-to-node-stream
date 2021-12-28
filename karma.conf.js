// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const path = require('path');
const webpack = require('webpack');

module.exports = config => {
  config.set({
    basePath: 'lib',
    frameworks: [
      'jasmine'
    ],
    files: [
      {pattern: '**/*.spec.ts'}
    ],
    preprocessors: {
      '**/*.ts': 'webpack'
    },

    webpack: {
      mode: 'development',
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
          process: 'process/browser'
        }
      },
      // Ensure buffer is available
      plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer']
        })
      ],
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: 'ts-loader'
          },
          {
            test: /\.ts$/,
            use: {loader: 'istanbul-instrumenter-loader'},
            enforce: 'post',
            exclude: /\.spec\.ts$/
          }

        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['kjhtml', 'dots', 'coverage-istanbul'],
    // https://www.npmjs.com/package/karma-coverage-istanbul-reporter
    coverageIstanbulReporter: {
      dir: path.join(__dirname, 'coverage'),
      reports: ['text-summary', 'lcovonly'],
      fixWebpackSourcePaths: true,
      'report-config': {
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        }
      },
      combineBrowserReports: true // Combines coverage information from multiple browsers into one report
    },

    mocha: {
      timeout: 20000 // 20 seconds
    },

    browsers: ['Chrome'],
    colors: true
  });
};
ReferenceError: process is not defined
    at resume (http://localhost:3001/static/js/bundle.js:190236:5)
    at ReadableWebToNodeStream.Readable.resume (http://localhost:3001/static/js/bundle.js:190226:5)
    at ReadableWebToNodeStream.Readable.on (http://localhost:3001/static/js/bundle.js:190144:39)
    at g.stream (http://localhost:3001/static/js/bundle.js:141910:36)
    at Object.parse (http://localhost:3001/static/js/bundle.js:141621:16)
    at Promise.catch.parseError (http://localhost:3001/static/js/bundle.js:6662:54)
    at new Promise (<anonymous>)
    at parsePreview (http://localhost:3001/static/js/bundle.js:6629:10)
    at http://localhost:3001/static/js/bundle.js:5049:58
    at invokePassiveEffectCreate (http://localhost:3001/static/js/bundle.js:166959:24)