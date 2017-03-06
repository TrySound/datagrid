import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Header from './Header.js';
import ResizeGhost from './ResizeGhost.js';
import List from './List.js';
import { withPropsOnChange, withDefaults, withPinnedColumns } from './hoc/index.js';
import { compose } from './utils/index.js';
import { markMoveDest, moveColumn, resizeColumn } from './actionCreators.js';
import { headerZindex } from './params.js';

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
    filter: string
};

type State = {
    columns: Column[],
    columnState: {
        moving: null | {
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
    )
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
        if (name !== this.state.movingName || left !== this.state.movingLeft || right !== this.state.movingRight) {
            this.setState({
                movingName: name,
                movingLeft: left,
                movingRight: right
            });
            this.props.callback(markMoveDest(name, left, right));
        }
    }

    onMove(name, left, right) {
        this.setState({
            movingName: null,
            movingLeft: null,
            movingRight: null
        });
        this.props.callback(moveColumn(name, left, right));
    }

    render(props, { ghost, ghostX }) {
        return (
            <div style={{
                position: 'relative',
                flexShrink: 0,
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
