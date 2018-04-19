import Component from './Component';

export default interface JSXObject {
  elementName: string | Function | Component;
  attributes?: Object;
  children?: [JSXObject | String];
}
