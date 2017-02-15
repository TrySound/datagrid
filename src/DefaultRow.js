import createElement from 'inferno-create-element';
import { defaultBorder } from './defaults.js';

const getRowStyle = index => ({
    display: 'flex',
    height: 'inherit',
    background: index % 2 === 0 ? '#fff' : '#f3f3f3'
});

const getColumnStyle = (column, index) => ({
    display: 'flex',
    alignItems: 'center',
    width: column.computedWidth || column.width,
    padding: '0 8px',
    boxSizing: 'border-box',
    borderLeft: index === 0 ? defaultBorder : '',
    borderRight: defaultBorder
});

const DefaultRow = ({ columns, datum, index }) => (
    <div style={getRowStyle(index)}>
        {columns.map((item, columnIndex) =>
            <div style={getColumnStyle(item, columnIndex)}>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    {datum[item.name]}
                </div>
            </div>
        )}
    </div>
);

export default DefaultRow;
