const path = require('path');

module.exports = (config) => {
  // Point Karma at the tests.bundle.js file, and run it through the relevant preprocessor plugins.

  config.set({
    browsers: ['PhantomJS'],
    browserNoActivityTimeout: 30000,
    colors: true,
    autoWatch: true,
    frameworks: ['chai', 'mocha'],

    files: [
      'src/**/*.test.js'
    ],

    // The preprocessor configures which files should be tested for coverage.
    preprocessors: {
      'src/**/*.test.js': ['webpack', 'sourcemap'],
    },

    // coverage reporter generates the coverage
    reporters: ['mocha', 'coverage'],

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    },

    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-webpack',
      'karma-coverage',
      'karma-mocha-reporter',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher'
    ],

    // mocha reporter settings > karma-mocha-reporter
    mochaReporter: {
      output: 'autowatch',
      colors: {
        success: 'green',
        info: 'cyan',
        warning: 'orange',
        error: 'red'
      }
    },

    // karma coverage reporter
    coverageReporter: {
      dir: './coverage/',
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text' }
      ]
    },

    // webpack settings
    webpack: {
      devtool: 'inline-source-map',

      externals: {
        jsdom: 'window',
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ReactContext': true,
        'react/lib/ExecutionEnvironment': true
      },

      module: {
        preLoaders: [{
          test: /\.js$/,
          loader: 'isparta-loader',
          include: path.join(__dirname, 'src')
        }],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(png|jpeg|jpg|gif|woff|woff2|eot|ttf|svg|ico|css)(\?.*$|$)/,
                loader: 'null-loader'
            },
            {
                test: /\.(json)(\?.+)?$/,
                loader: 'url-loader'
            }
        ]
      }
    },

    webpackServer: {
      noInfo: true
    }

  });
};