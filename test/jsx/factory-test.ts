import * as tape from 'tape';
import factory from '../../src/jsx/factory';

// I duplicated a number of tests from https://github.com/calebmer/node_modules/blob/master/babel-plugin-transform-jsx
// It was used in early versions of this project.


tape('factory is a function', function(test) {
	test.equal(typeof factory, 'function');
    test.end();
});

tape('can handle a simple tag', function(test) {
    let expected = { tagName: 'text', props: {}, children: [] };
    
    test.deepEqual( factory('text'), expected );
    test.end();
});

tape('properly sets props on simple tags', function(test) {
    let expected = { tagName: 'text', props: { width: 200, height: 100 }, children: []};

    test.deepEqual( factory('text', {height: 100, width: 200}), expected );
    test.end();
});

tape('should output object', function(test) {

    // var jsx = (
    //     <html lang="en">
    //       <head>
    //         <meta charSet="utf8"/>
    //         <title>A JSX Test</title>
    //       </head>
    //       <body>
    //         <div id="container">
    //           <p>Just a basic JSX transformation</p>
    //         </div>
    //       </body>
    //     </html>
    //   )
    let actual = factory('html', {lang: "en"}, [
        factory('head', {}, [
            factory('meta', {charSet: "utf8"}),
            factory('title', {}, ["A JSX Test"])
        ]),
        factory('body', {}, [
            factory('div', {id: "container"}, [
                factory('p', {}, ["Just a basic JSX transformation"])
            ])
        ])
    ]);

    let expected = {
        tagName: "html",
        props: {
          lang: "en"
        },
        children: [{
          tagName: "head",
          props: {},
          children: [{
            tagName: "meta",
            props: {
              charSet: "utf8"
            },
            children: []
          }, {
            tagName: "title",
            props: {},
            children: ["A JSX Test"]
          }]
        }, {
          tagName: "body",
          props: {},
          children: [{
            tagName: "div",
            props: {
              id: "container"
            },
            children: [{
              tagName: "p",
              props: {},
              children: ["Just a basic JSX transformation"]
            }]
          }]
        }]
      };
      
      test.deepEquals(actual, expected);
      test.end();
});

tape('should allow expression children', function(test) {
    // var jsx = (
    //     <div>
    //       {"a" + "b" + "c"}
    //       {1 + 2 * 3}
    //     </div>
    //   )    
    let expected = { tagName: "div", props: {}, children: [ "a"+"b"+"c", 1+2+3 ] };

    test.deepEqual( factory('div', {}, [ "a"+"b"+"c", 1+2+3 ]), expected );
    test.end();
});

