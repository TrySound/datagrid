import createElement from 'inferno-create-element';
import Component from 'inferno-component';

export default handlers => BaseComponent => class extends Component {
    constructor(props) {
        super(props);
        this.handlers = Object.keys(handlers).reduce((acc, name) => {
            acc[name] = (...args) => handlers[name](this.props, ...args);
            return acc;
        }, {});
    }

    render() {
        return <BaseComponent {...this.props} {...this.handlers} />;
    }
};
