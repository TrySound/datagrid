import React from 'react';
import { shouldUpdate } from 'recompose';
import { withMiddleState } from './hoc/index.js';
import { compose, checkProps, getKeysByIndex } from './utils/index.js';

export default compose(
    shouldUpdate(checkProps('start', 'end', 'data', 'rowHeight', 'rowComponent', 'rowProps')),
    withMiddleState((props, state = {}) => ({
        keys: getKeysByIndex(state.keys, props.start, props.end)
    }))
)(({ data, rowHeight, start, end, keys, rowComponent: Row, rowProps }) =>
    <div style={{ position: 'relative', height: data.length * rowHeight }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: start * rowHeight }}>
            {data.slice(start, end + 1).map((datum, index) =>
                <div key={keys[start + index]} style={{ height: rowHeight }}>
                    <Row datum={datum} index={start + index} {...rowProps} />
                </div>
            )}
        </div>
    </div>
);
