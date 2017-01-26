module.exports = {
    entry: 'multi-entry-loader?include=test/**/*.test.js!',
    output: {
        filename: 'tmp/test.js'
    },
    devtool: '#inline-source-map'
};
