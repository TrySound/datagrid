import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';

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
        babel()
    ]
};
