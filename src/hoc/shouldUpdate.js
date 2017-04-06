import createElement from 'inferno-create-element';
import Component from 'inferno-component';

export default test => BaseComponent => class extends Component {
    shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
    }

    render() {
        return <BaseComponent {...this.props} />;
    }
};
