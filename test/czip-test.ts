import * as tape from 'tape';
import czip from '../src/czip';


tape("zip ist a function", function(test) {
	test.equal(typeof czip, 'function');
  	test.end();
});

tape("zip combines arrays to a collection", function(test) {
	var input = {
		x: [1, 2, 3, 4],
		y: ['a', 'b', 'c', 'd'],
		z: [true, false, true, false]
	};
	var expected = [
		{ x: 1, y: 'a', z: true },
		{ x: 2, y: 'b', z: false },
		{ x: 3, y: 'c', z: true },
		{ x: 4, y: 'd', z: false }
	];
	
	test.deepEqual(czip(input), expected);
  	test.end();
});

tape("zip combines arrays to a collection by a given primary-kex", function(test) {
	var input = {
		x: [1, 2, 3, 4, 5],
		y: ['a', 'b', 'c', 'd'],
		z: [true, false, true, false]
	};
	var expectedX = [
		{ x: 1, y: 'a', z: true },
		{ x: 2, y: 'b', z: false },
		{ x: 3, y: 'c', z: true },
		{ x: 4, y: 'd', z: false },
		{ x: 5, y: undefined, z: undefined}
	];
	var expectedY = [
		{ x: 1, y: 'a', z: true },
		{ x: 2, y: 'b', z: false },
		{ x: 3, y: 'c', z: true },
		{ x: 4, y: 'd', z: false }
	];
	test.deepEqual(czip(input, 'x'), expectedX);
	test.deepEqual(czip(input, 'y'), expectedY);
  	test.end();
});