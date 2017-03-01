import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Header from './Header.js';
import ResizeGhost from './ResizeGhost.js';
import List from './List.js';
import DefaultColumn from './DefaultColumn.js';
import DefaultRow from './DefaultRow.js';
import { withPropsOnChange, withPinnableColumns } from './hoc/index.js';
import { compose } from './utils/index.js';
import { markMoveDest, moveColumn, moveResizeGhost, resizeColumn } from './actionCreators.js';
import { headerZindex, defaultMinWidth } from './params.js';

/*

type Column = {
    name: string,
    displayName: string,
    width: number | string,
    minWidth: number,
    maxWidth: number,
    enableResizing: boolean,
    enableMoving: boolean,
    enableFiltering: boolean,
    enableSorting: boolean,

    sort: null | 'asc' | 'desc',
    placeholder: string,
    value: string
};

type State = {
    columns: Column[],
    columnState: {
        move: null | {
            name: string,
            left: string,
            right: string
        }
    },
    rowState: {
        selectedIndex: number
    }
}

*/

const defaultState = {};

export default compose(
    withPropsOnChange(
        ['state'],
        ({ state }) => ({
            columns: state.columns,
            columnState: state.columnState || defaultState,
            rowState: state.rowState || defaultState
        })
    ),
    withPropsOnChange(
        ['columns'],
        ({ columns }) => ({
            columns: columns.map(column => Object.assign({}, column, {
                width: column.width || column.minWidth || defaultMinWidth
            }))
        })
    ),
    withPinnableColumns,
    withPropsOnChange(
        ['columns'],
        ({ columns }) => ({
            tableWidth: columns.reduce((acc, item) => acc + item.width, 0)
        })
    ),
    withPropsOnChange(
        ['columnState', 'callback', 'columnComponent'],
        ({ columnState, callback, columnComponent: Column = DefaultColumn }) => ({
            columnComponent: props => <Column state={columnState} callback={callback} {...props} />
        })
    ),
    withPropsOnChange(
        ['rowState', 'columns', 'callback', 'rowComponent'],
        ({ rowState, columns,  callback, rowComponent: Row = DefaultRow }) => ({
            rowComponent: props => <Row state={rowState} columns={columns} callback={callback} {...props} />
        })
    )
)(class GridWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dragging: false,
            ghost: false,
            ghostX: 0
        };
        this.onResizing = this.onResizing.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onMoving = this.onMoving.bind(this);
        this.onMove = this.onMove.bind(this);
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

    render(props, { dragging, ghost, ghostX }) {
        return (
            <div style={{
                position: 'relative',
                flexShrink: 0,
                pointerEvents: dragging ? 'none' : '',
                userSelect: dragging ? 'none' : '',
                width: props.tableWidth
            }}>
                {Boolean(props.headerHeight) &&
                    <div style={{ position: 'sticky', zIndex: headerZindex, top: 0, height: props.headerHeight }}>
                        <Header
                            columns={props.columns}
                            component={props.columnComponent}
                            onMove={this.onMove}
                            onMoving={this.onMoving}
                            onResize={this.onResize}
                            onResizing={this.onResizing} />
                    </div>
                }
                <List
                    data={props.data}
                    scrollTop={props.scrollTop - props.headerHeight}
                    viewportHeight={props.viewportHeight - props.headerHeight}
                    rowHeight={props.rowHeight}
                    component={props.rowComponent} />
                {ghost && <ResizeGhost x={ghostX} />}
            </div>
        );
    }
});
