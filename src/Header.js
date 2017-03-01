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

const ColumnGhost = ({ x, children }) => (
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, transform: `translateX(${x}px)` }}>
        {children}
    </div>
);

const ColumnWrapper = ({ column, index, ghost, component: Column, callback }) => (
    <div style={{ width: column.width }}>
        <Column column={column} index={index} ghost={ghost} callback={callback} />
    </div>
);

export default draggable({ offset: dragOffset })(class HeaderWrapper extends Component {
    componentWillReceiveProps(nextProps) {
        // drag move
        if (this.props.dragging && this.props.x !== nextProps.x) {
            const columns = nextProps.columns;
            const dx = nextProps.dx;
            const [startIndex, startX] = findColumn(columns, nextProps.x - dx);
            const startColumn = columns[startIndex];
            if (Math.abs(startX) <= dragOffset) {
                // resize previous
                // skip first to not conflict with pinned tables with moving
                if (startIndex !== 0) {
                    const prevColumn = columns[startIndex - 1];
                    nextProps.onResizing(prevColumn.name, nextProps.x);
                }
            } else if (Math.abs(startX - startColumn.width) <= dragOffset) {
                // resize current
                nextProps.onResizing(startColumn.name, nextProps.x);
            } else {
                // move current
                const [leftIndex, rightIndex] = bisectColumns(columns, nextProps.x - startX);
                const leftName = leftIndex === -1 ? null : columns[leftIndex].name;
                const rightName = rightIndex === -1 ? null : columns[rightIndex].name;
                this.props.onMoving(startColumn.name, leftName, rightName);
                this.setState({
                    position: nextProps.x - startX,
                    startColumn,
                    startIndex,
                    moving: true
                });
            }
        }

        // drag end
        if (!nextProps.dragging && this.props.dragging !== nextProps.dragging) {
            const columns = nextProps.columns;
            const dx = nextProps.dx;
            const [startIndex, startX] = findColumn(columns, nextProps.x - dx);
            const startColumn = columns[startIndex];
            // const [endIndex, endX] = findColumn(columns, nextProps.x);
            // const endColumn = columns[endIndex];
            if (Math.abs(startX) <= dragOffset) {
                // resize previous
                // skip first to not conflict with pinned tables with moving
                if (startIndex !== 0) {
                    const prevColumn = columns[startIndex - 1];
                    nextProps.onResize(prevColumn.name, prevColumn.width + startX + dx);
                }
            } else if (Math.abs(startX - startColumn.width) <= dragOffset) {
                // resize current
                nextProps.onResize(startColumn.name, startX + dx);
            } else {
                // move current
                const [leftIndex, rightIndex] = bisectColumns(columns, nextProps.x - startX);
                const leftName = leftIndex === -1 ? null : columns[leftIndex].name;
                const rightName = rightIndex === -1 ? null : columns[rightIndex].name;
                nextProps.onMove(startColumn.name, leftName, rightName);
                this.setState({
                    moving: false
                });
            }
        }
    }

    render({ columns, component, callback }, { moving, startColumn, startIndex, position }) {
        return (
            <Container>
                {columns.map((column, index) =>
                    <ColumnWrapper
                        key={column.name}
                        column={column}
                        index={index}
                        ghost={false}
                        component={component}
                        callback={callback}
                    />
                )}
                {moving &&
                    <ColumnGhost x={position}>
                        <ColumnWrapper
                            column={startColumn}
                            index={startIndex}
                            ghost={true}
                            component={component} />
                    </ColumnGhost>
                }
            </Container>
        );
    }
});
