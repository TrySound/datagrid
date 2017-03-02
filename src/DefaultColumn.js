import createElement from 'inferno-create-element';
import { withHandlers } from './hoc/index.js';
import { defaultBorder, defaultActiveBorder, defaultHeaderBackground } from './params.js';
import { filterColumn, sortColumn } from './actionCreators.js';

const getColumnStyle = (state, column, last, ghost) => ({
    position: 'relative',
    height: 'inherit',
    boxSizing: 'border-box',
    padding: '0 8px',
    borderTop: defaultBorder,
    borderBottom: defaultBorder,
    borderLeft: ghost && defaultBorder
        || (state.moving && state.moving.right === column.name ? defaultActiveBorder : defaultBorder)
        || '',

    borderRight: ghost && defaultBorder
        || last && (state.moving && state.moving.left === column.name ? defaultActiveBorder : defaultBorder)
        || '',
    background: defaultHeaderBackground,
    opacity: ghost ? .8 : 1
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
    <div style={getColumnStyle(props.state, props.column, props.last, props.ghost)}>
        <div style={{ display: 'flex', alignItems: 'center', height: 30, }} onClick={props.onSortClink}>
            {props.column.displayName || props.column.name}
            {props.column.sort &&
                <Arrow direction={props.column.sort} />
            }
        </div>
        {props.column.enableFiltering &&
            <input style={getInputStyle()}
                placeholder={props.column.placeholder}
                value={props.column.filter}
                onInput={props.onFilterInput} />
        }
    </div>
);
