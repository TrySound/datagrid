import createElement from 'inferno-create-element';
import compose from './decorators/compose.js';
import withMiddleState from './decorators/withMiddleState.js';
import withProps from './decorators/withProps.js';
import { getVisibleRows, getKeysByIndex } from './listUtils.js';

const Canvas = ({ height, children }) => (
    <div style={{ position: 'relative', height }}>
        {children}
    </div>
);

const Rendered = ({ height, top, children }) => (
    <div style={{ position: 'absolute', left: 0, right: 0, top, height }}>
        {children}
    </div>
);

const RowWrapper = ({ height, datum, index, component: Row }) => (
    <div style={{ height }}>
        <Row datum={datum} index={index} />
    </div>
);

const shouldRowUpdate = (props, nextProps) => (
    props.height !== nextProps.height ||
    props.component !== nextProps.component ||
    props.datum !== nextProps.datum
);

const List = ({ data, rowHeight, component, start, end, keys }) => (
    <Canvas height={data.length * rowHeight}>
        <Rendered top={start * rowHeight} height={(end - start) * rowHeight}>
            {data.slice(start, end).map((datum, index) =>
                <RowWrapper
                    onComponentShouldUpdate={shouldRowUpdate}
                    key={keys[start + index]}
                    height={rowHeight}
                    index={start + index}
                    datum={datum}
                    component={component}
                />
            )}
        </Rendered>
    </Canvas>
);

const shouldListUpdate = (props, nextProps) => (
    props.start !== nextProps.start ||
    props.end !== nextProps.end ||
    props.data !== nextProps.data ||
    props.rowHeight !== nextProps.rowHeight ||
    props.component !== nextProps.component
);

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
    withProps({
        onComponentShouldUpdate: shouldListUpdate
    })
)(List);
