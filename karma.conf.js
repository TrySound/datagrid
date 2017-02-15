module.exports = config => config.set({
    basePath: '',

    frameworks: ['mocha'],

    files: [
        {
            pattern: 'src/**/*.test.js',
            watched: false
        }
    ],

    preprocessors: {
        'src/**/*.test.js': ['webpack', 'sourcemap']
    },

    webpack: {
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'buble-loader',
                            options: {
                                jsx: 'createElement'
                            }
                        }
                    ]
                }
            ]
        }
    },

    webpackMiddleware: {
        stats: 'errors-only'
    },

    reporters: ['mocha'],

    mochaReporter: {
        showDiff: true
    },

    browsers: ['Chrome'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,
    singleRun: true
});
