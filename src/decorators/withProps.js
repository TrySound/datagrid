import createElement from 'inferno-create-element';

export default config => BaseComponent => props => createElement(BaseComponent, Object.assign({}, props, config));
