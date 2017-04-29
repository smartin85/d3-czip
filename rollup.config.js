export default {
    entry: 'build/jsnext/index.js',
    targets: [
        { dest: 'build/d3-czip.js', format: 'umd' },
        { dest: 'example/d3-czip.js', format: 'umd' }
    ],
	moduleName: 'd3'
};