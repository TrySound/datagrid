import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Header from './Header.js';
import ResizeGhost from './ResizeGhost.js';
import List from './List.js';
import DefaultRow from './DefaultRow.js';
import DefaultHeaderColumn from './DefaultHeaderColumn.js';
import { compose, withPropsOnChange, withPinnableColumns } from './decorators/index.js';
import { markMoveDest, moveColumn, moveResizeGhost, resizeColumn } from './actionCreators.js';
import { headerZindex, defaultMinWidth } from './params.js';

export default compose(
    withPinnableColumns,
    withPropsOnChange(
        ['columns'],
        ({ columns }) => ({
            columns: columns.map(column => Object.assign({}, column, {
                width: column.width || column.minWidth || defaultMinWidth
            }))
        })
    ),
    withPropsOnChange(
        ['columns'],
        ({ columns }) => ({
            tableWidth: columns.reduce((acc, item) => acc + item.width, 0)
        })
    ),
    withPropsOnChange(
        ['callback', 'headerColumnComponent'],
        ({ callback, headerColumnComponent: HeaderColumn = DefaultHeaderColumn }) => ({
            headerColumnComponent: ({ column, index, ghost }) => (
                <HeaderColumn column={column} index={index} ghost={ghost} callback={callback} />
            )
        })
    ),
    withPropsOnChange(
        ['columns', 'callback', 'rowComponent'],
        ({ columns,  callback, rowComponent: Row = DefaultRow }) => ({
            rowComponent: ({ datum, index }) => (
                <Row columns={columns} datum={datum} index={index} callback={callback} />
            )
        })
    )
)(class GridWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerHeight: 0,
            dragging: false,
            ghost: false,
            ghostX: 0
        };
        this.refHeader = this.refHeader.bind(this);
        this.onResizing = this.onResizing.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onMoving = this.onMoving.bind(this);
        this.onMove = this.onMove.bind(this);
    }

    refHeader(element) {
        this.setState({
            headerHeight: element.offsetHeight
        });
    }

    onResizing(name, ghostPosition) {
        if (name !== this.state.resizingName || ghostPosition !== this.state.ghostX) {
            this.setState({
                dragging: true,
                ghost: true,
                resizingName: name,
                ghostX: ghostPosition
            });
            this.props.callback(moveResizeGhost(name, ghostPosition));
        }
    }

    onResize(name, columnWidth) {
        this.setState({
            dragging: false,
            ghost: false
        });
        this.props.callback(resizeColumn(name, columnWidth));
    }

    onMoving(name, left, right) {
        if (name !== this.state.movingName || left !== this.state.movingLeft || right !== this.state.movingRight) {
            this.setState({
                dragging: true,
                movingName: name,
                movingLeft: left,
                movingRight: right
            });
            this.props.callback(markMoveDest(name, left, right));
        }
    }

    onMove(name, left, right) {
        this.setState({
            dragging: false,
            movingName: null,
            movingLeft: null,
            movingRight: null
        });
        this.props.callback(moveColumn(name, left, right));
    }

    render(props, { dragging, ghost, ghostX, headerHeight }) {
        return (
            <div style={{
                position: 'relative',
                pointerEvents: dragging ? 'none' : '',
                userSelect: dragging ? 'none' : '',
                width: props.tableWidth
            }}>
                <div style={{ position: 'sticky', zIndex: headerZindex, top: 0 }} ref={this.refHeader}>
                    <Header
                        columns={props.columns}
                        component={props.headerColumnComponent}
                        onMove={this.onMove}
                        onMoving={this.onMoving}
                        onResize={this.onResize}
                        onResizing={this.onResizing} />
                </div>
                <List
                    data={props.data}
                    scrollTop={props.scrollTop - headerHeight}
                    viewportHeight={props.viewportHeight - headerHeight}
                    rowHeight={props.rowHeight}
                    component={props.rowComponent} />
                {ghost && <ResizeGhost x={ghostX} />}
            </div>
        );
    }
});
