import eslint from 'rollup-plugin-eslint';
import buble from 'rollup-plugin-buble';

const pkg = require('./package.json');

export default {
    entry: './src/index.js',
    dest: pkg.main,
    format: 'cjs',
    external: Object.keys(pkg.dependencies),
    plugins: [
        eslint({
            throwError: true
        }),
        buble({
            target: {
                chrome: 50
            },
            jsx: 'createElement'
        })
    ]
};
