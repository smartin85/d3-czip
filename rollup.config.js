import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'build/jsnext/index.js',
    output: [
        { file: 'build/d3-czip.js', format: 'umd', name: 'd3', extend: true },
        { file: 'example/d3-czip.js', format: 'umd', name: 'd3', extend: true }
    ],
	name: 'd3',
    plugins: [commonjs()]
};