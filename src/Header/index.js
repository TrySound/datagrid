import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import { trimColumnWidth, bisectColumns } from '../utils/index.js';
import Container from './Container.js';
import ColumnGhost from './ColumnGhost.js';
import ColumnWrapper from './ColumnWrapper.js';
import DraggableColumn from './DraggableColumn.js';

export { default as ResizeGhost } from './ResizeGhost.js';

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

    render({ columns, component, callback }, { moving, position }) {
        return (
            <Container>
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
                            component={component}
                            callback={callback} />
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
            </Container>
        );
    }
}
