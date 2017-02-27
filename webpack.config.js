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
                    'babel-loader',
                    'eslint-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
