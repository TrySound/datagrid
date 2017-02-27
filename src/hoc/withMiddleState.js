import createElement from 'inferno-create-element';
import Component from 'inferno-component';

export default reducer => BaseComponent => class extends Component {
    constructor(props) {
        super(props);
        this.state = reducer(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(reducer(nextProps, this.state));
    }

    render(props, state) {
        return <BaseComponent {...props} {...state} />;
    }
};
