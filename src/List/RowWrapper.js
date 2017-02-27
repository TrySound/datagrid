import createElement from 'inferno-create-element';
import { shouldUpdate } from '../hoc/index.js';

export default shouldUpdate((props, nextProps) =>
    props.height !== nextProps.height ||
    props.component !== nextProps.component ||
    props.datum !== nextProps.datum
)(({ height, datum, index, component: Row }) =>
    <div style={{ height }}>
        <Row datum={datum} index={index} />
    </div>
);
