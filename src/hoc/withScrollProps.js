import createElement from 'inferno-create-element';
import Component from 'inferno-component';

export default BaseComponent => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0,
            scrollLeft: 0
        };
        this.onScroll = e => (console.log(e.target.scrollTop), this.setState({
            scrollTop: e.target.scrollTop,
            scrollLeft: e.target.scrollLeft
        }));
    }

    render(props, { scrollTop, scrollLeft }) {
        return (
            createElement('div', {
                style: { width: props.viewportWidth, height: props.viewportHeight, overflow: 'auto' },
                onScroll: this.onScroll
            }, [
                createElement(BaseComponent, Object.assign({}, props, {
                    scrollTop,
                    scrollLeft
                }))
            ])
        );
    }
};
