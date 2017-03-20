import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Header from './Header.js';
import ResizeGhost from './ResizeGhost.js';
import List from './List.js';
import { withPropsOnChange, withDefaults, withPinnedColumns } from './hoc/index.js';
import { compose, getVisibleRows } from './utils/index.js';
import { markMoveDest, moveColumn, resizeColumn } from './actionCreators.js';

export default compose(
    withDefaults(),
    withPinnedColumns(),
    withPropsOnChange(
        ['columns'],
        ({ columns }) => ({
            tableWidth: columns.reduce((acc, item) => acc + item.width, 0)
        })
    ),
    withPropsOnChange(
        ['columnState', 'callback', 'columnComponent'],
        ({ columnState, callback, columnComponent: Column }) => ({
            columnComponent: props => <Column state={columnState} callback={callback} {...props} />
        })
    ),
    withPropsOnChange(
        ['rowState', 'columns', 'callback', 'rowComponent'],
        ({ rowState, columns,  callback, rowComponent: Row }) => ({
            rowComponent: props => <Row state={rowState} columns={columns} callback={callback} {...props} />
        })
    ),
    withPropsOnChange(['scrollTop', 'viewportHeight', 'headerHeight', 'rowHeight', 'data'], props => {
        const [start, end] = getVisibleRows({
            scrollTop: props.scrollTop - props.headerHeight,
            viewportHeight: props.viewportHeight - props.headerHeight,
            rowHeight: props.rowHeight,
            rowsCount: props.data.length
        });
        return {
            start,
            end
        };
    })
)(class GridWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ghost: false,
            ghostX: 0
        };
        this.onResizing = this.onResizing.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onMoving = this.onMoving.bind(this);
        this.onMove = this.onMove.bind(this);
    }

    onResizing(name, ghostX) {
        this.setState({
            ghost: true,
            ghostX
        });
    }

    onResize(name, columnWidth) {
        this.setState({
            ghost: false
        });
        this.props.callback(resizeColumn(name, columnWidth));
    }

    onMoving(name, left, right) {
        if (name !== this.movingName || left !== this.movingLeft || right !== this.movingRight) {
            this.movingName = name;
            this.movingLeft = left;
            this.movingRight = right;
            this.props.callback(markMoveDest(name, left, right));
        }
    }

    onMove(name, left, right) {
        this.movingName = null;
        this.movingLeft = null;
        this.movingRight = null;
        this.props.callback(moveColumn(name, left, right));
    }

    render(props, { ghost, ghostX }) {
        return (
            <div style={{ position: 'relative', width: props.tableWidth, flexShrink: 0 }}>
                {Boolean(props.headerHeight) &&
                    <div style={{ position: 'sticky', zIndex: 1, top: 0, height: props.headerHeight }}>
                        <Header
                            columns={props.columns}
                            component={props.columnComponent}
                            onMove={this.onMove}
                            onMoving={this.onMoving}
                            onResize={this.onResize}
                            onResizing={this.onResizing} />
                    </div>
                }
                {ghost && <ResizeGhost x={ghostX} />}
                <List
                    data={props.data}
                    start={props.start}
                    end={props.end}
                    rowHeight={props.rowHeight}
                    component={props.rowComponent} />
            </div>
        );
    }
});
