import * as tape from 'tape';
import factory from '../../src/jsx/factory';
import Component from '../../src/Component';

// I duplicated a number of tests from https://github.com/calebmer/node_modules/blob/master/babel-plugin-transform-jsx
// It was used in early versions of this project.


tape('factory is a function', function(test) {
	test.equal(typeof factory, 'function');
    test.end();
});

tape('can handle a simple tag', function(test) {
    // NOTE: props can be null
    let expected = { tagName: 'text', props: null, children: [] };
    
    test.deepEqual( <text></text>, expected );
    test.end();
});

tape('can handle a simple self-closing tag', function(test) {
  // NOTE: props can be null
  let expected = { tagName: 'text', props: null, children: [] };
  
  test.deepEqual( <text />, expected );
  test.end();
});


tape('properly sets props on simple tags', function(test) {
    let expected = { tagName: 'text', props: { width: 200, height: 100 }, children: []};

    test.deepEqual( <text width={200} height={100}></text>, expected );
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
    let actual = (
        <html lang="en">
          <head>
            <meta charSet="utf8"/>
            <title>A JSX Test</title>
          </head>
          <body>
            <div id="container">
              <p>Just a basic JSX transformation</p>
            </div>
          </body>
        </html>
      );

    let expected = {
        tagName: "html",
        props: {
          lang: "en"
        },
        children: [{
          tagName: "head",
          props: null,
          children: [{
            tagName: "meta",
            props: {
              charSet: "utf8"
            },
            children: []
          }, {
            tagName: "title",
            props: null,
            children: ["A JSX Test"]
          }]
        }, {
          tagName: "body",
          props: null,
          children: [{
            tagName: "div",
            props: {
              id: "container"
            },
            children: [{
              tagName: "p",
              props: null,
              children: ["Just a basic JSX transformation"]
            }]
          }]
        }]
      };
      
      test.deepEquals(actual, expected);
      test.end();
});

tape('should allow expression children', function(test) {
    var jsx = (
        <div>
          {"a" + "b" + "c"}
          {1 + 2 * 3}
        </div>
      );
    let expected = { tagName: "div", props: null, children: [ "a"+"b"+"c", 1+2*3 ] };

    test.deepEqual( jsx, expected );
    test.end();
});

tape('should render a functional, stateless component', function(test) {
  const SeeYa = (props) => {
    return (
      <text textAnchor="middle" x={props.x} y={props.y}>See you next time!</text>
    );
  }

  test.deepEqual( <SeeYa textAnchor="middle" x={100} y={50}/>,
    <text textAnchor="middle" x={100} y={50}>See you next time!</text>
  );

  test.end();
});

tape('should render a component', function(test) {
  interface PositionProps {
    x: number,
    y: number
  };

  class Goodbye extends Component<PositionProps> {
    constructor(props: PositionProps) {
      super(props);
    }

    render() {
      return (<text textAnchor="middle" x={this.props.x} y={this.props.y}>And Goodbye!</text>);
    }
  }

  test.deepEqual( <Goodbye x={50} y={100} />,
    <text textAnchor="middle" x={50} y={100}>And Goodbye!</text>
  );

  test.end();
});