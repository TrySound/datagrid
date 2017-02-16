import createElement from 'inferno-create-element';
import withMiddleState from './withMiddleState.js';
import { pinnedZindex } from '../params.js';

export default component => withMiddleState((props, state = {}) => {
    if (props.columns === state.columns) {
        return state;
    }
    return {
        columns: props.columns,
        leftColumns: props.columns.filter(column => column.pinnedLeft),
        centerColumns: props.columns.filter(column => !column.pinnedLeft && !column.pinnedRight),
        rightColumns: props.columns.filter(column => column.pinnedRight)
    };
})(props => (
    <div style={{ display: 'flex' }}>
        {props.leftColumns.length !== 0 &&
            <div style={{ position: 'sticky', zIndex: pinnedZindex, left: 0 }}>
                {createElement(component, Object.assign({}, props, { columns: props.leftColumns }))}
            </div>
        }
        {createElement(component, Object.assign({}, props, { columns: props.centerColumns }))}
        {props.rightColumns.length !== 0 &&
            <div style={{ position: 'sticky', zIndex: pinnedZindex, right: 0 }}>
                {createElement(component, Object.assign({}, props, { columns: props.rightColumns }))}
            </div>
        }
    </div>
));
