import Component from '../Component';
import JSXObject from '../JSXObject';

function isClass(element: any): boolean {
  return typeof element === 'function'
    && element.prototype instanceof Component;
}

function isStatelessComponent(element: any): boolean {
  return !isClass(element) && typeof element === 'function';
}

export default function (elementName: any, attributes = {}, ...children): JSXObject {

  let element = null;

  if (isClass(elementName)) {
    const instance = new elementName(attributes);
    return instance.render();
  } else if (isStatelessComponent(elementName)) {
    return elementName(attributes);
  } else {
    const elementChildren = [].concat(...children);
    element = { elementName, attributes, children: elementChildren };
  }

  return element;
}
