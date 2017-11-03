export default {
    entry: 'build/jsnext/index.js',
    targets: [
        { dest: 'build/d3-jsx.js', format: 'umd' },
        { dest: 'example/d3-jsx.js', format: 'umd' }
    ],
	moduleName: 'd3'
};