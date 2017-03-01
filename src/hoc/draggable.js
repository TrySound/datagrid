import createElement from 'inferno-create-element';
import Component from 'inferno-component';

export default ({ offset = 3 } = {}) => BaseComponent => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dragging: false
        };
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    onMouseDown(downEvent) {
        const clientX = downEvent.currentTarget.getBoundingClientRect().left;
        const startX = downEvent.clientX - clientX;
        const onMouseMove = e => {
            const x = e.clientX - clientX;
            const dx = x - startX;
            if (this.state.dragging || Math.abs(dx) > offset) {
                this.setState({
                    dragging: true,
                    dx,
                    x
                });
            }
        };
        const onMouseUp = e => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            if (this.state.dragging || Math.abs(e.clientX - clientX - startX) > offset) {
                this.setState({
                    dragging: false
                });
            }
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    render(props, state) {
        return (
            <div onMouseDown={this.onMouseDown}>
                <BaseComponent {...props} {...state} />
            </div>
        );
    }
};
