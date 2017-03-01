import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import { bisectColumns, findColumn } from './utils/index.js';
import { draggable } from './hoc/index.js';
import { dragOffset } from './params.js';

const Container = ({ children }) => (
    <div style={{ display: 'flex', position: 'relative', height: 'inherit' }}>
        {children}
    </div>
);

const Resizer = ({ last }) => (
    <div style={{
        position: 'absolute',
        zIndex: 2,
        top: 0,
        bottom: 0,
        right: last ? 0 : -dragOffset,
        width: last ? dragOffset : dragOffset * 2,
        cursor: 'col-resize'
    }}>
    </div>
);

const ColumnWrapper = ({ column, index, last, component: Column }) => (
    <div style={{ position: 'relative', width: column.width, height: 'inherit' }}>
        <Column column={column} index={index} last={last} ghost={false} />
        {column.enableResizing && <Resizer last={last} />}
    </div>
);

const ColumnGhost = ({ x, column, index, component: Column }) => (
    <div style={{ position: 'absolute', transform: `translateX(${x}px)`, width: column.width, height: 'inherit' }}>
        <Column column={column} index={index} last={false} ghost={true} />
    </div>
);

export default draggable({
    offset: dragOffset,
    style: { height: 'inherit'}
})(class HeaderWrapper extends Component {
    componentWillReceiveProps(nextProps) {
        if (this.props.dragging && this.props.x !== nextProps.x) {
            this.dragMove(nextProps);
        }
        if (!nextProps.dragging && this.props.dragging !== nextProps.dragging) {
            this.dragEnd(nextProps);
        }
    }

    dragMove(props) {
        const [startIndex, startX] = findColumn(props.columns, props.x - props.dx);
        const startColumn = props.columns[startIndex];
        if (Math.abs(startX) <= dragOffset) {
            // resize previous
            // skip first to not conflict with pinned tables with moving
            if (startIndex !== 0) {
                const prevColumn = props.columns[startIndex - 1];
                if (prevColumn.enableResizing) {
                    props.onResizing(prevColumn.name, props.x);
                }
            }
        } else if (Math.abs(startX - startColumn.width) <= dragOffset) {
            // resize current
            if (startColumn.enableResizing) {
                props.onResizing(startColumn.name, props.x);
            }
        } else if (startColumn.enableMoving) {
            // move current
            const [leftIndex, rightIndex] = bisectColumns(props.columns, props.x - startX);
            props.onMoving(
                startColumn.name,
                leftIndex === -1 ? null : props.columns[leftIndex].name,
                rightIndex === -1 ? null : props.columns[rightIndex].name
            );
            this.setState({
                moving: true,
                movingPosition: props.x - startX,
                movingColumn: startColumn,
                movingIndex: startIndex
            });
        }
    }

    dragEnd(props) {
        const [startIndex, startX] = findColumn(props.columns, props.x - props.dx);
        const startColumn = props.columns[startIndex];
        if (Math.abs(startX) <= dragOffset) {
            // resize previous
            // skip first to not conflict with pinned tables with moving
            if (startIndex !== 0) {
                const prevColumn = props.columns[startIndex - 1];
                if (prevColumn.enableResizing) {
                    props.onResize(prevColumn.name, prevColumn.width + startX + props.dx);
                }
            }
        } else if (Math.abs(startX - startColumn.width) <= dragOffset) {
            // resize current
            if (startColumn.enableResizing) {
                props.onResize(startColumn.name, startX + props.dx);
            }
        } else if (startColumn.enableMoving) {
            // move current
            const [leftIndex, rightIndex] = bisectColumns(props.columns, props.x - startX);
            props.onMove(
                startColumn.name,
                leftIndex === -1 ? null : props.columns[leftIndex].name,
                rightIndex === -1 ? null : props.columns[rightIndex].name
            );
            this.setState({
                moving: false
            });
        }
    }

    render({ columns, component }, { moving, movingColumn, movingIndex, movingPosition }) {
        return (
            <Container>
                {columns.map((column, index) =>
                    <ColumnWrapper
                        key={column.name}
                        column={column}
                        index={index}
                        last={index === columns.length - 1}
                        component={component}
                    />
                )}
                {moving &&
                    <ColumnGhost
                        x={movingPosition}
                        column={movingColumn}
                        index={movingIndex}
                        component={component}
                    />
                }
            </Container>
        );
    }
});
