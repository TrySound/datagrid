import createElement from 'inferno-create-element';

const getRowColor = index => index % 2 === 0 ? '#eee' : '#fff';

const DefaultRow = ({ columns, datum, index }) => (
    <div style={{ display: 'flex', alignItems: 'center', height: 'inherit', background: getRowColor(index) }}>
        {columns.map((item, columnIndex) =>
            <div style={{
                width: item.width,
                padding: '0 8px',
                boxSizing: 'border-box',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
            }}>
                {datum[item.name]}
            </div>
        )}
    </div>
);

export default DefaultRow;
