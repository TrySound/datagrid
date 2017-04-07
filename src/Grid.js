import React from 'react';
import { compose, withPropsOnChange } from 'recompose';
import Header from './Header.js';
import ResizeGhost from './ResizeGhost.js';
import List from './List.js';
import { withDefaults, withPinnedColumns } from './hoc/index.js';
import { getVisibleRows } from './utils/index.js';
import { markMoveDest, moveColumn, resizeColumn } from './actionCreators.js';

export default compose(
    withDefaults(),
    withPropsOnChange(['transform', 'columns', 'gridState', 'data'], ({ transform, columns, gridState, data }) => ({
        data: transform({ columns, gridState }, data)
    })),
    withPinnedColumns(),
    withPropsOnChange(
        ['columns'],
        ({ columns }) => ({
            tableWidth: columns.reduce((acc, item) => acc + item.width, 0)
        })
    ),
    withPropsOnChange(['gridState', 'columns', 'callback'], ({ gridState, columns, callback }) => ({
        columnProps: {
            gridState,
            callback
        },
        rowProps: {
            gridState,
            columns,
            callback
        }
    })),
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
)(class GridWrapper extends React.Component {
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

    render() {
        return (
            <div style={{ position: 'relative', width: this.props.tableWidth, flexShrink: 0 }}>
                {Boolean(this.props.headerHeight) &&
                    <div style={{ position: 'sticky', zIndex: 1, top: 0, height: this.props.headerHeight }}>
                        <Header
                            columns={this.props.columns}
                            columnComponent={this.props.columnComponent}
                            columnProps={this.props.columnProps}
                            onMove={this.onMove}
                            onMoving={this.onMoving}
                            onResize={this.onResize}
                            onResizing={this.onResizing} />
                    </div>
                }
                {this.state.ghost && <ResizeGhost x={this.state.ghostX} />}
                <List
                    data={this.props.data}
                    start={this.props.start}
                    end={this.props.end}
                    rowHeight={this.props.rowHeight}
                    rowComponent={this.props.rowComponent}
                    rowProps={this.props.rowProps} />
            </div>
        );
    }
});
