import createElement from 'inferno-create-element';
import { withHandlers } from './decorators/index.js';
import { defaultBorder, defaultActiveBorder, defaultHeaderBackground } from './params.js';
import { filterColumn, sortColumn } from './actionCreators.js';

const getBorderLeft = (column, index, ghost) =>
    index === 0 || ghost ? (column.moveLeft ? defaultActiveBorder : defaultBorder) : '';

const getBorderRight = column =>
    column.moveRight ? defaultActiveBorder : defaultBorder;

const getOpacity = ghost => ghost ? .8 : 1;

const getColumnStyle = (column, index, ghost) => ({
    height: 60,
    boxSizing: 'border-box',
    padding: '0 8px',
    overflow: 'hidden',
    borderTop: defaultBorder,
    borderBottom: defaultBorder,
    borderLeft: getBorderLeft(column, index, ghost),
    borderRight: getBorderRight(column, index, ghost),
    background: defaultHeaderBackground,
    opacity: getOpacity(ghost)
});

const getInputStyle = () => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 8px',
    border: 0,
    borderBottom: defaultBorder,
    marginBottom: 8
});

const Arrow = ({ direction }) => (
    <div style={{
        [direction === 'asc' ? 'borderBottom' : 'borderTop']: '4px solid',
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent'
    }}>
    </div>
);

export default withHandlers({
    onSortClink: props => props.callback(sortColumn(props.column.name)),
    onFilterInput: (props, event) => props.callback(filterColumn(props.column.name, event.target.value))
})(props =>
    <div style={getColumnStyle(props.column, props.index, props.ghost)}>
        <div style={{ display: 'flex', alignItems: 'center', height: 30, }} onClick={props.onSortClink}>
            {props.column.displayName || props.column.name}
            {props.column.sort &&
                <Arrow direction={props.column.sort} />
            }
        </div>
        {props.column.enableFiltering &&
            <input style={getInputStyle()}
                placeholder={props.column.placeholder}
                value={props.column.value}
                onInput={props.onFilterInput} />
        }
    </div>
);
