import createElement from 'inferno-create-element';
import Component from 'inferno-component';

export default BaseComponent => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0,
            scrollLeft: 0,
            viewportWidth: 0,
            viewportHeight: 0
        };
        this.ref = element => {
            this.element = element;
            this.setState({
                viewportWidth: element.clientWidth,
                viewportHeight: element.clientHeight
            });
        };
        this.onScroll = e => this.setState({
            scrollTop: e.target.scrollTop,
            scrollLeft: e.target.scrollLeft
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.viewportWidth !== nextProps.viewportWidth ||
            this.props.viewportHeight !== nextProps.viewportHeight
        ) {
            if (this.element) {
                this.setState({
                    viewportWidth: this.element.clientWidth,
                    viewportHeight: this.element.clientHeight
                });
            }
        }
    }

    render(props, state) {
        return (
            <div style={{ width: props.viewportWidth, height: props.viewportHeight, overflow: 'auto' }}
                onScroll={this.onScroll}
                ref={this.ref}>
                <BaseComponent {...props} {...state} />
            </div>
        );
    }
};
