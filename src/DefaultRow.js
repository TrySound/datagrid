import createElement from 'inferno-create-element';

const getRowColor = index => index % 2 === 0 ? '#eee' : '#fff';
const getRowStyle = index => ({
    display: 'flex',
    alignItems: 'center',
    height: 'inherit',
    background: getRowColor(index)
});
const getColumnWidth = column => column.computedWidth || column.width;
const getColumnStyle = column => ({
    width: getColumnWidth(column),
    padding: '0 8px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
});

const DefaultRow = ({ columns, datum, index }) => (
    <div style={getRowStyle(index)}>
        {columns.map(item =>
            <div style={getColumnStyle(item)}>
                {datum[item.name]}
            </div>
        )}
    </div>
);

export default DefaultRow;
