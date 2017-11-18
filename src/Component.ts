/*
 A good reference for how to handle Props, State, etc... in TypeScript
 https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v15/index.d.ts
*/

interface Component<P = {}> { }

class Component<P> {
    
    props: P;

    constructor(props?: P, context?: any) {
        this.props = props;
    }
    
    render() { }
}

export default Component;