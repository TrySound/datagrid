import createElement from 'inferno-create-element';
import Component from 'inferno-component';

export default reducer => component => class extends Component {
    constructor(props) {
        super(props);
        this.state = reducer(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(reducer(nextProps, this.state));
    }

    render(props, state) {
        return createElement(component, Object.assign({}, props, state));
    }
};
