import createElement from 'inferno-create-element';
import Component from 'inferno-component';

export default (mappedKeys, mapProps) => BaseComponent => class extends Component {
    constructor(props) {
        super(props);
        this.state = mapProps(props);
    }

    componentWillReceiveProps(nextProps) {
        if (mappedKeys.some(key => this.props[key] !== nextProps[key])) {
            this.setState(mapProps(nextProps));
        }
    }

    render(props, state) {
        return createElement(BaseComponent, Object.assign({}, props, state));
    }
};
