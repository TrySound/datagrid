import createElement from 'inferno-create-element';
import { shouldUpdate, withMiddleState } from '../hoc/index.js';
import { compose, getVisibleRows, getKeysByIndex } from '../utils/index.js';
import Container from './Container.js';
import RowWrapper from './RowWrapper.js';

export default compose(
    withMiddleState((props, state = {}) => {
        const [start, end] = getVisibleRows({
            scrollTop: props.scrollTop,
            viewportHeight: props.viewportHeight,
            rowHeight: props.rowHeight,
            rowsCount: props.data.length
        });
        return {
            start,
            end,
            keys: getKeysByIndex(state.keys, start, end)
        };
    }),
    shouldUpdate((props, nextProps) =>
        props.start !== nextProps.start ||
        props.end !== nextProps.end ||
        props.data !== nextProps.data ||
        props.rowHeight !== nextProps.rowHeight ||
        props.component !== nextProps.component
    )
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
