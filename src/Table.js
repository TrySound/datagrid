import createElement from 'inferno-create-element';
import List from './List.js';
import DefaultRow from './DefaultRow.js';
import { withMiddleState } from './decorators/index.js';

const createRowComponent = ({ columns, component: Row = DefaultRow }) => ({ datum, index }) =>
    <Row columns={columns} datum={datum} index={index} />;

export default withMiddleState((props, state = {}) => {
    if (props.columns === state.columns && props.component === state.prevComponent) {
        return state;
    }
    return {
        columns: props.columns,
        prevComponent: props.component,
        component: createRowComponent(props)
    };
})(List);
