const WebpackMochaPlugin = require('webpack-mocha-plugin');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: 'multi-entry-loader?include[]=test.setup.js&include[]=src/**/*.js&exclude=src/examples/**!',
    output: {
        path: 'tmp',
        filename: 'test-bundle.js'
    },
    devtool: '#inline-source-map',
    externals: webpackNodeExternals(),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /\.test\.js$/,
                loader: 'istanbul-instrumenter-loader',
                options: {
                    esModules: true
                }
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            envs: [
                                'mocha'
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new WebpackMochaPlugin({
            codeCoverage: true,
            coverageReports: ['html', 'text-summary']
        })
    ],
    watchOptions: {
        ignored: /coverage/
    }
};
