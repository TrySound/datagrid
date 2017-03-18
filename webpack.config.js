const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliWebpackPlugin = require('babili-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/examples/index.js',
    output: {
        path: __dirname,
        filename: 'examples.js'
    },
    devtool: !production && '#inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: production
                        }
                    }
                ]
            },
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

if (production) {
    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.DEBUG': true
        }),
        new BabiliWebpackPlugin()
    );
}
