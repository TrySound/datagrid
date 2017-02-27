import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Draggable from './Draggable.js';
import Resizer from './Resizer.js';

export default class DraggableColumn extends Component {
    constructor() {
        super();
        this.refResizer = element => this.resizer = element;
        let name;
        let enabled;
        this.onStart = (e, pos) => {
            name = e.target === this.resizer ? 'resize' : 'move';
            enabled = name === 'resize' || name === 'move' && this.props.column.moving;
            this.props.onStart(name, this.props.column.name, pos);
        };
        this.onDrag = (e, pos) => enabled && this.props.onDrag(name, this.props.column.name, pos);
        this.onEnd = (e, pos) => enabled && this.props.onEnd(name, this.props.column.name, pos);
    }

    render({ children }) {
        return (
            <Draggable
                onStart={this.onStart}
                onDrag={this.onDrag}
                onEnd={this.onEnd}>
                {children}
                {this.props.column.resizing &&
                    <Resizer onComponentDidMount={this.refResizer} />
                }
            </Draggable>
        );
    }
}
