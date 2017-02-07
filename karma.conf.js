module.exports = config => config.set({
    basePath: '',

    frameworks: ['mocha'],

    files: [
        {
            pattern: 'test/**/*.test.js',
            watched: false
        }
    ],

    preprocessors: {
        'test/**/*.test.js': ['webpack', 'sourcemap']
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

    browsers: ['Chrome'],

    phantomjsLauncher: {
        exitOnResourceError: true
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,
    singleRun: true
});
