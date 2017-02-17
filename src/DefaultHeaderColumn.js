import { linkEvent } from 'inferno';
import createElement from 'inferno-create-element';
import { defaultBorder, defaultActiveBorder, defaultHeaderBackground } from './params.js';
import { filterColumn } from './actionCreators.js';

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

const onInput = (props, event) =>
    props.callback(filterColumn(props.column.name, event.target.value));

export default props => (
    <div style={getColumnStyle(props.column, props.index, props.ghost)}>
        <div style={{ display: 'flex', alignItems: 'center', height: 30, }}>
            {props.column.displayName || props.column.name}
        </div>
        {props.column.enableFiltering &&
            <input style={getInputStyle()}
                placeholder={props.column.placeholder}
                value={props.column.value}
                onInput={linkEvent(props, onInput)} />
        }
    </div>
);
