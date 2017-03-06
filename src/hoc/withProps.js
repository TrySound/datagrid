import createElement from 'inferno-create-element';

export default mapProps => BaseComponent => props => <BaseComponent {...props} {...mapProps(props)} />;
