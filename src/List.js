import createElement from 'inferno-create-element';
import { shouldUpdate, withMiddleState } from './hoc/index.js';
import { compose, checkProps, getKeysByIndex } from './utils/index.js';

const Container = ({ height, renderedTop, children }) => (
    <div style={{ position: 'relative', height }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: renderedTop }}>
            {children}
        </div>
    </div>
);

const RowWrapper = compose(
    shouldUpdate(checkProps('height', 'component', 'datum'))
)(({ height, datum, index, component: Row }) =>
    <div style={{ height }}>
        <Row datum={datum} index={index} />
    </div>
);

export default compose(
    withMiddleState((props, state = {}) => ({
        keys: getKeysByIndex(state.keys, props.start, props.end)
    })),
    shouldUpdate(checkProps('start', 'end', 'data', 'rowHeight', 'component'))
)(({ data, rowHeight, component, start, end, keys }) =>
    <Container height={data.length * rowHeight} renderedTop={start * rowHeight}>
        {data.slice(start, end + 1).map((datum, index) =>
            <RowWrapper
                key={keys[start + index]}
                height={rowHeight}
                index={start + index}
                datum={datum}
                component={component}
            />
        )}
    </Container>
);
