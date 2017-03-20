import createElement from 'inferno-create-element';
import { withLinkedHandlers } from './hoc/index.js';
import { filterColumn, sortColumn } from './actionCreators.js';

const border = '1px solid #d4d4d4';
const activeBorder = '1px solid #000';

const getColumnStyle = (gridState, column, last, ghost) => ({
    position: 'relative',
    height: 'inherit',
    boxSizing: 'border-box',
    padding: '0 8px',
    borderTop: border,
    borderBottom: border,
    borderLeft: ghost && border
        || (gridState.moving && gridState.moving.right === column.name ? activeBorder : border)
        || '',

    borderRight: ghost && border
        || last && (gridState.moving && gridState.moving.left === column.name ? activeBorder : border)
        || '',
    background: 'linear-gradient(to top, #eeeeee, #ffffff)',
    opacity: ghost ? .8 : 1
});

const getInputStyle = () => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 8px',
    border: 0,
    borderBottom: border,
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

export default withLinkedHandlers({
    onSortClink: props => props.callback(sortColumn(props.column.name)),
    onFilterInput: (props, event) => props.callback(filterColumn(props.column.name, event.target.value))
})(props =>
    <div style={getColumnStyle(props.gridState, props.column, props.last, props.ghost)}>
        <div style={{ display: 'flex', alignItems: 'center', height: 30, }} onClick={props.onSortClink(props)}>
            {props.column.displayName || props.column.name}
            {props.column.sort &&
                <Arrow direction={props.column.sort} />
            }
        </div>
        {props.column.enableFiltering &&
            <input style={getInputStyle()}
                placeholder={props.column.placeholder}
                value={props.column.filter}
                onInput={props.onFilterInput(props)} />
        }
    </div>
);
