import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import { checkProps } from '../utils/index.js';

export default (test, mapProps) => BaseComponent => class extends Component {
    constructor(props) {
        super(props);
        this.state = mapProps(props);
        this.checkProps = typeof test === 'function' ? test : checkProps(test);
    }

    componentWillReceiveProps(nextProps) {
        if (this.checkProps(this.props, nextProps)) {
            this.setState(mapProps(nextProps));
        }
    }

    render(props, state) {
        return <BaseComponent {...props} {...state} />;
    }
};
