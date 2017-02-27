const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/examples/index.js',
    output: {
        strictModuleExceptionHandling: true,
        path: __dirname,
        filename: 'examples.js'
    },
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
                    },
                    'eslint-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
