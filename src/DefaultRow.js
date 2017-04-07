import React from 'react';
import { withHandlers } from 'recompose';
import { selectRow } from './actionCreators.js';

const border = '1px solid #d4d4d4';

const getRowStyle = (gridState, index) => ({
    display: 'flex',
    height: 'inherit',
    cursor: 'default',
    background: gridState.selectedIndex === index ? '#c9dde1' : index % 2 === 0 ? '#fff' : '#f3f3f3'
});

const getColumnStyle = (column, last) => ({
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    width: column.width,
    padding: '0 8px',
    boxSizing: 'border-box',
    borderLeft: border,
    borderRight: last ? border : ''
});

const DefaultRow = withHandlers({
    selectRow: props => () => props.callback(selectRow(props.index))
})(props =>
    <div style={getRowStyle(props.gridState, props.index)} onClick={props.selectRow}>
        {props.columns.map((item, columnIndex) =>
            <div key={item.name} style={getColumnStyle(item, columnIndex === props.columns.length - 1)}>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    {props.datum[item.name]}
                </div>
            </div>
        )}
    </div>
);

export default DefaultRow;
