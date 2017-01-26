const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'dist/inferno-datagrid.js'
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
                            jsx: 'createElement'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[name]---[local]'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
