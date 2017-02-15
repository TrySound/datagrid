import createElement from 'inferno-create-element';
import { defaultBorder, defaultActiveBorder, defaultHeaderBackground } from './defaults.js';

const getBorderLeft = (column, index, ghost) =>
    index === 0 || ghost ? (column.moveRight ? defaultActiveBorder : defaultBorder) : '';

const getBorderRight = column =>
    column.moveLeft ? defaultActiveBorder : defaultBorder;

const getOpacity = ghost => ghost ? .8 : 1;

const getStyle = (column, index, ghost) => ({
    height: 30,
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '0 8px',
    overflow: 'hidden',
    borderTop: defaultBorder,
    borderBottom: defaultBorder,
    borderLeft: getBorderLeft(column, index, ghost),
    borderRight: getBorderRight(column, index, ghost),
    background: defaultHeaderBackground,
    opacity: getOpacity(ghost)
})

export default ({ column, index, ghost }) => (
    <div style={getStyle(column, index, ghost)}>
        {column.displayName || column.name}
    </div>
);
