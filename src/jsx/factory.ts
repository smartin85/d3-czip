import Component from '../Component';

function isClass( element:any ) {
    return typeof element === 'function' 
        && element.prototype instanceof Component;
}

function isStatelessComponent( element: any ) {
    return !isClass(element) && typeof element === 'function';
}

export default function( tag: any, props = {}, ...children ) {

    let element = null;

    if( isClass(tag) ) {
        let instance = new tag(props);
        return instance.render();
    } else if ( isStatelessComponent(tag) ) {
        return tag(props);
    } else {
        children = [].concat(...children);
        element = { tagName: tag, props, children }
    }
    
    return element;
}