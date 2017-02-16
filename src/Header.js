import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Draggable from './Draggable.js';
import { trimColumnWidth, bisectColumns } from './utils/index.js';

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

const ColumnWrapper = ({ column, index, ghost, component: Column }) => (
    <div style={{ width: column.width }}>
        <Column column={column} index={index} ghost={ghost} />
    </div>
);

const Header = ({ children }) => (
    <div style={{ display: 'flex', position: 'relative' }}>
        {children}
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
            this.props.onResizing(name, this.currentLeft + trimColumnWidth(this.currentColumn, position));
        } else {
            const [leftIndex, rightIndex] = bisectColumns(this.props.columns, this.startMovingPosition + position);
            const leftName = leftIndex === -1 ? null : this.props.columns[leftIndex].name;
            const rightName = rightIndex === -1 ? null : this.props.columns[rightIndex].name;
            this.props.onMoving(name, leftName, rightName);
        }
        this.setState({
            position: this.startMovingPosition + position,
            moving: type === 'move'
        });
    }

    onEnd(type, name, position) {
        if (type === 'resize') {
            this.props.onResize(name, trimColumnWidth(this.currentColumn, position));
        } else {
            const [leftIndex, rightIndex] = bisectColumns(this.props.columns, this.startMovingPosition + position);
            const leftName = leftIndex === -1 ? null : this.props.columns[leftIndex].name;
            const rightName = rightIndex === -1 ? null : this.props.columns[rightIndex].name;
            this.props.onMove(name, leftName, rightName);
        }
        this.setState({
            moving: false
        });
    }

    render({ columns, component }, { moving, position }) {
        return (
            <Header>
                {columns.map((column, index) =>
                    <DraggableColumn
                        key={column.name}
                        column={column}
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
            </Header>
        );
    }
}
