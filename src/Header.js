import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Draggable from './Draggable.js';
import { getColumnWidth } from './utils.js';

const Resizer = () => (
    <div style={{
        position: 'absolute',
        zIndex: 2,
        top: 0,
        bottom: 0,
        right: -2,
        width: 4,
        cursor: 'col-resize'
    }}>
    </div>
);

const ColumnGhost = ({ x, column, index, component: Column }) => (
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, transform: `translateX(${x}px)` }}>
        <Column column={column} index={index} />
    </div>
);

class ColumnWrapper extends Component {
    constructor() {
        super();
        this.refWrapper = element => this.props.register(this.props.column, element);
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
                onComponentDidMount={this.refWrapper}
                onStart={this.onStart}
                onDrag={this.onDrag}
                onEnd={this.onEnd}>
                {children}
                <Resizer onComponentDidMount={this.refResizer} />
            </Draggable>
        );
    }
}

export default class HeaderWrapper extends Component {
    constructor() {
        super();
        this.ref = this.ref.bind(this);
        this.refColumn = this.refColumn.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.map = Object.create(null);
    }

    ref(element) {
        this.element = element;
    }

    refColumn(name, element) {
        this.map[name] = element;
    }

    onStart(type, name, start) {
        const containerRect = this.element.getBoundingClientRect();
        const columnRect = this.map[name].getBoundingClientRect();
        this.start = columnRect.left - containerRect.left - start;
    }

    onDrag(type, name, pos) {
        const column = this.props.columns.find(d => d.name === name);
        const containerRect = this.element.getBoundingClientRect();
        const columnRect = this.map[name].getBoundingClientRect();
        const columnX = columnRect.left - containerRect.left;
        if (type === 'resize') {
            this.props.callback({
                type: 'RESIZING',
                payload: {
                    position: columnX + getColumnWidth(column, pos)
                }
            });
        }
        this.setState({
            pos: Math.min(Math.max(0, this.start + pos), containerRect.width - columnRect.width),
            dragging: true,
            moving: type === 'move',
            currentColumn: column
        });
    }

    onEnd(type, name, pos) {
        const currentColumn = this.props.columns.find(d => d.name === name);
        if (type === 'resize') {
            this.props.callback({
                type: 'RESIZE',
                payload: {
                    column: name,
                    width: getColumnWidth(currentColumn, pos)
                }
            });
        } else {
            const containerRect = this.element.getBoundingClientRect();
            const currentColumnRect = this.map[name].getBoundingClientRect();
            const containerPos = currentColumnRect.left - containerRect.left + pos;
            this.props.columns
            .filter(column => name !== column.name)
            .filter(column => {
                const columnRect = this.map[column.name].getBoundingClientRect();
                const columnLeft = columnRect.left - containerRect.left;
                const columnRight = columnLeft + columnRect.width;
                return columnLeft < containerPos && containerPos < columnRight;
            })
            .forEach(column => {
                this.props.callback({
                    type: 'SWAP',
                    payload: {
                        source: name,
                        target: column.name
                    }
                });
            });
        }
        this.setState({
            dragging: false,
            moving: false
        });
    }

    render({ columns, component: Column }, { dragging, moving, currentColumn, pos }) {
        return (
            <div style={{ display: 'flex', position: 'relative', userSelect: dragging ? 'none' : '' }} ref={this.ref}>
                {columns.map((column, index) =>
                    <ColumnWrapper
                        key={column.name}
                        column={column.name}
                        register={this.refColumn}
                        onStart={this.onStart}
                        onDrag={this.onDrag}
                        onEnd={this.onEnd}>
                        <Column column={column} index={index} />
                    </ColumnWrapper>
                )}
                {moving && <ColumnGhost x={pos} column={currentColumn} index={0} component={Column} />}
            </div>
        );
    }
}
