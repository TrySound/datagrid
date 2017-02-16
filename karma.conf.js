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
        devtool: '#inline-source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'buble-loader',
                            options: {
                                target: {
                                    chrome: 50
                                },
                                jsx: 'createElement'
                            }
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules|\.test\.js$/,
                    loader: 'istanbul-instrumenter-loader',
                    options: {
                        esModules: true
                    }
                }
            ]
        }
    },

    webpackMiddleware: {
        stats: 'errors-only'
    },

    reporters: ['mocha', 'coverage'],

    mochaReporter: {
        showDiff: true
    },

    coverageReporter: {
        dir: 'coverage',
        reporters: [
            { type: 'html' },
            { type: 'text', file: null },
        ]
    },

    browsers: ['Chrome'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,
    singleRun: true
});
