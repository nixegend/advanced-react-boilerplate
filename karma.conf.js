const webpackConfig = require('./webpack.config');

/*
https://www.youtube.com/watch?v=y_1l1Fc0l2U
https://habrahabr.ru/company/rambler-co/blog/278503/
https://github.com/ColCh/isparta-instrumenter-loader
https://github.com/webpack/karma-webpack#karma-webpack
https://github.com/karma-runner/karma-coverage#configuration
https://github.com/deepsweet/isparta-loader
https://github.com/webpack/karma-webpack#alternative-usage
https://github.com/doctyper/isparta-instrumenter-loader
*/


module.exports = function (config) {
  config.set({
    basePath: '',
    urlRoot: '/',
    port: 9876,
    captureTimeout: 60000,

    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [{
        type: 'html'
      }, {
          type: 'text'
        }]
    },

    // All plugins starting with karma will automatically be loaded
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-webpack',
      'karma-chrome-launcher'
    ],

    protocol: 'http:', // 'https:',
    hostname: 'localhost',

    // An array of allowed transport methods between the browser and testing server.
    // This configuration setting is handed off to socket.io
    // (which manages the communication between browsers and the testing server).
    transports: ['polling', 'websocket'],

    // ## Adapter for the Jasmine testing framework.
    // We will be creating the unit test in jasmine
    // https://github.com/karma-runner/karma-jasmine
    frameworks: ['jasmine'],

    reporters: ['progress', 'coverage'],

    // ## Watch files
    // list of files / patterns to load in the browser
    files: [
      'app/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [],

    logLevel: config.LOG_INFO,

    // ## Convert ES6 to ES5
    // as suggested here http://busypeoples.github.io/post/testing-workflow-with-es6/
    // preprocessors: {
      // 'app/**/*.spec.js': ['coverage'] // Use webpack to build each test individually
      // 'tests/**/*.js': ['webpack'] // More performant but test cannot be run individually
    // },

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'], // 'Firefox' 'PhantomJS'

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false

  });
};