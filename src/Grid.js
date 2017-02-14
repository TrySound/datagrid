import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Header from './Header.js';
import ResizeGhost from './ResizeGhost.js';
import Table from './Table.js';

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

export default class GridWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.setState({
            minWidth: nextProps.columns.reduce((acc, item) => acc + item.width, 0)
        });
    }

    onResizing(columnName, ghostPosition) {
        this.setState({
            dragging: true,
            ghost: true,
            ghostX: ghostPosition
        });
        this.props.callback({
            type: 'RESIZING',
            payload: {
                columnName,
                ghostPosition
            }
        });
    }

    onResize(columnName, columnWidth) {
        this.setState({
            dragging: false,
            ghost: false
        });
        this.props.callback({
            type: 'RESIZE',
            payload: {
                columnName,
                columnWidth
            }
        });
    }

    onMoving(columnName, between) {
        this.setState({
            dragging: true
        });
        this.props.callback({
            type: 'MOVING',
            payload: {
                columnName,
                between
            }
        });
    }

    onMove(columnName, between) {
        this.setState({
            dragging: false
        });
        this.props.callback({
            type: 'MOVE',
            payload: {
                columnName,
                between
            }
        });
    }

    render(props, { dragging, ghost, ghostX, minWidth }) {
        return (
            <Grid dragging={dragging} minWidth={minWidth}>
                <Header
                    columns={props.columns}
                    component={props.headerColumnComponent}
                    onMove={this.onMove}
                    onMoving={this.onMoving}
                    onResize={this.onResize}
                    onResizing={this.onResizing} />
                <Table
                    columns={props.columns}
                    data={props.data}
                    scrollTop={props.scrollTop}
                    viewportHeight={props.viewportHeight}
                    rowHeight={props.rowHeight}
                    component={props.rowComponent} />
                {ghost && <ResizeGhost x={ghostX} />}
            </Grid>
        );
    }
}
