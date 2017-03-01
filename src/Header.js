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

const ColumnGhost = ({ x, column, index, component: Column }) => (
    <div style={{ position: 'absolute', left: 0, top: 0, transform: `translateX(${x}px)`, width: column.width }}>
        <Column column={column} index={index} ghost={true} />
    </div>
);

const ColumnWrapper = ({ column, index, component: Column }) => (
    <div style={{ width: column.width }}>
        <Column column={column} index={index} ghost={false} />
    </div>
);

export default draggable({ offset: dragOffset })(class HeaderWrapper extends Component {
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
                props.onResizing(prevColumn.name, props.x);
            }
        } else if (Math.abs(startX - startColumn.width) <= dragOffset) {
            // resize current
            props.onResizing(startColumn.name, props.x);
        } else {
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
                props.onResize(prevColumn.name, prevColumn.width + startX + props.dx);
            }
        } else if (Math.abs(startX - startColumn.width) <= dragOffset) {
            // resize current
            props.onResize(startColumn.name, startX + props.dx);
        } else {
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
