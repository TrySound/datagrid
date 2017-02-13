import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Draggable from './Draggable.js';
import { trimColumnWidth, bisectColumns } from './columnsUtils.js';

const Resizer = () => (
    <div style={{
        position: 'absolute',
        zIndex: 2,
        top: 0,
        bottom: 0,
        right: -3,
        width: 6,
        cursor: 'col-resize'
    }}>
    </div>
);

const ColumnGhost = ({ x, children }) => (
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, transform: `translateX(${x}px)` }}>
        {children}
    </div>
);

class DraggableColumn extends Component {
    constructor() {
        super();
        this.refResizer = element => this.resizer = element;
        let name;
        this.onStart = (e, pos) => {
            name = e.target === this.resizer ? 'resize' : 'move';
            this.props.onStart(name, this.props.column, pos);
        };
        this.onDrag = (e, pos) => this.props.onDrag(name, this.props.column, pos);
        this.onEnd = (e, pos) => this.props.onEnd(name, this.props.column, pos);
    }

    render({ children }) {
        return (
            <Draggable
                onStart={this.onStart}
                onDrag={this.onDrag}
                onEnd={this.onEnd}>
                {children}
                <Resizer onComponentDidMount={this.refResizer} />
            </Draggable>
        );
    }
}

const ColumnWrapper = ({ column, index, ghost, component: Column }) => (
    <div style={{ width: column.width }}>
        <Column column={column} index={index} ghost={ghost} />
    </div>
);

export default class HeaderWrapper extends Component {
    constructor() {
        super();
        this.onStart = this.onStart.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    onStart(type, name, start) {
        const columns = this.props.columns;
        const currentIndex = columns.findIndex(d => d.name === name);
        const currentColumn = columns[currentIndex];
        const currentLeft = columns.slice(0, currentIndex).reduce((acc, d) => acc + d.width, 0);
        this.currentLeft = currentLeft;
        this.startMovingPosition = currentLeft - start;
        this.currentIndex = currentIndex;
        this.currentColumn = currentColumn;
    }

    onDrag(type, name, position) {
        if (type === 'resize') {
            this.props.callback({
                type: 'RESIZING',
                column: name,
                ghostPosition: this.currentLeft + trimColumnWidth(this.currentColumn, position)
            });
        } else {
            this.props.callback({
                type: 'MOVING',
                column: name,
                between: bisectColumns(this.props.columns, this.startMovingPosition + position)
            });
        }
        this.setState({
            position: this.startMovingPosition + position,
            moving: type === 'move'
        });
    }

    onEnd(type, name, position) {
        if (type === 'resize') {
            this.props.callback({
                type: 'RESIZE',
                column: name,
                columnWidth: trimColumnWidth(this.currentColumn, position)
            });
        } else {
            this.props.callback({
                type: 'MOVE',
                column: name,
                between: bisectColumns(this.props.columns, this.startMovingPosition + position)
            });
        }
        this.setState({
            moving: false
        });
    }

    render({ columns, component }, { moving, position }) {
        return (
            <div style={{ display: 'flex', position: 'relative' }}>
                {columns.map((column, index) =>
                    <DraggableColumn
                        key={column.name}
                        column={column.name}
                        onStart={this.onStart}
                        onDrag={this.onDrag}
                        onEnd={this.onEnd}>
                        <ColumnWrapper
                            column={column}
                            index={index}
                            ghost={false}
                            component={component} />
                    </DraggableColumn>
                )}
                {moving &&
                    <ColumnGhost x={position}>
                        <ColumnWrapper
                            column={this.currentColumn}
                            index={this.currentIndex}
                            ghost={true}
                            component={component} />
                    </ColumnGhost>
                }
            </div>
        );
    }
}
