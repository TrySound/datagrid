import createElement from 'inferno-create-element';
import Component from 'inferno-component';

export default handlers => BaseComponent => class extends Component {
    constructor(props) {
        super(props);
        const handlersKeys = Object.keys(handlers);
        const handlersProps = {};
        const boundHandlers = handlersKeys.reduce((acc, key) => {
            acc[key] = (...args) => handlers[key](handlersProps[key], ...args);
            return acc;
        }, {});
        this.handlers = handlersKeys.reduce((acc, key) => {
            acc[key] = prop => {
                handlersProps[key] = prop;
                return boundHandlers[key];
            };
            return acc;
        }, {});
    }

    render() {
        return <BaseComponent {...this.props} {...this.handlers} />;
    }
};
