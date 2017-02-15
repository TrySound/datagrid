import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Header from './Header.js';
import ResizeGhost from './ResizeGhost.js';
import List from './List.js';
import DefaultRow from './DefaultRow.js';
import { markMoveDest, moveColumn, moveResizeGhost, resizeColumn } from './actionCreators.js';

const Grid = ({ dragging, minWidth, children }) => (
    <div style={{
        position: 'relative',
        pointerEvents: dragging ? 'none' : '',
        userSelect: dragging ? 'none' : '',
        minWidth
    }}>
        {children}
    </div>
);

const createRowComponent = ({ columns, component: Row = DefaultRow }) => ({ datum, index }) => (
    <Row columns={columns} datum={datum} index={index} />
);


export default class GridWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowComponent: createRowComponent({
                columns: props.columns,
                component: props.rowComponent
            }),
            dragging: false,
            ghost: false,
            ghostX: 0,
            minWidth: 0
        };
        this.onResizing = this.onResizing.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onMoving = this.onMoving.bind(this);
        this.onMove = this.onMove.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let rowComponent = this.state.rowComponent;
        if (this.props.rowComponent !== nextProps.rowComponent || this.props.columns !== nextProps.columns) {
            rowComponent = createRowComponent({
                columns: nextProps.columns,
                component: nextProps.rowComponent
            });
        }
        this.setState({
            rowComponent,
            minWidth: nextProps.columns.reduce((acc, item) => acc + item.width, 0)
        });
    }

    onResizing(name, ghostPosition) {
        this.setState({
            dragging: true,
            ghost: true,
            ghostX: ghostPosition
        });
        this.props.callback(moveResizeGhost(name, ghostPosition));
    }

    onResize(name, columnWidth) {
        this.setState({
            dragging: false,
            ghost: false
        });
        this.props.callback(resizeColumn(name, columnWidth));
    }

    onMoving(name, left, right) {
        this.setState({
            dragging: true
        });
        this.props.callback(markMoveDest(name, left, right));
    }

    onMove(name, left, right) {
        this.setState({
            dragging: false
        });
        this.props.callback(moveColumn(name, left, right));
    }

    render(props, { dragging, ghost, ghostX, minWidth, rowComponent }) {
        return (
            <Grid dragging={dragging} minWidth={minWidth}>
                <Header
                    columns={props.columns}
                    component={props.headerColumnComponent}
                    onMove={this.onMove}
                    onMoving={this.onMoving}
                    onResize={this.onResize}
                    onResizing={this.onResizing} />
                <List
                    data={props.data}
                    scrollTop={props.scrollTop}
                    viewportHeight={props.viewportHeight}
                    rowHeight={props.rowHeight}
                    component={rowComponent} />
                {ghost && <ResizeGhost x={ghostX} />}
            </Grid>
        );
    }
}
