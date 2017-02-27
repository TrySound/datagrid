import createElement from 'inferno-create-element';
import { defaultBorder } from './params.js';
import { withHandlers } from './hoc/index.js';
import { selectRow } from './actionCreators.js';

const getRowStyle = (state, index) => ({
    display: 'flex',
    height: 'inherit',
    cursor: 'default',
    background: state.selectedIndex === index ? '#c9dde1' : index % 2 === 0 ? '#fff' : '#f3f3f3'
});

const getColumnStyle = (column, index) => ({
    display: 'flex',
    alignItems: 'center',
    width: column.width,
    padding: '0 8px',
    boxSizing: 'border-box',
    borderLeft: index === 0 ? defaultBorder : '',
    borderRight: defaultBorder
});

const DefaultRow = withHandlers({
    selectRow: props => props.callback(selectRow(props.index))
})(props =>
    <div style={getRowStyle(props.state, props.index)} onClick={props.selectRow}>
        {props.columns.map((item, columnIndex) =>
            <div style={getColumnStyle(item, columnIndex)}>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    {props.datum[item.name]}
                </div>
            </div>
        )}
    </div>
);

export default DefaultRow;
