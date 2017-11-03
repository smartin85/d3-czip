import * as tape from 'tape';
import factory from '../../src/jsx/factory';

tape('factory is a function', function(test) {
	test.equal(typeof factory, 'function');
    test.end();
});

tape('can handle a simple tag', function(test) {
    let expected = { tagName: 'text', props: {}, children: [] };
    
    test.deepEqual( factory('text'), expected );
    test.end();
});

tape('properly sets attributes on simple tags', function(test) {
    let expected = { tagName: 'text', props: { width: 200, height: 100 }, children: []};

    test.deepEqual( factory('text', {height: 100, width: 200}), expected );
    test.end();
});
