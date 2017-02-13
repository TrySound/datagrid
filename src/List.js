import createElement from 'inferno-create-element';
import Component from 'inferno-component';
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

const shouldRowUpdate = (lastProps, nextProps) =>
    lastProps.height !== nextProps.height ||
    lastProps.component !== nextProps.component ||
    lastProps.datum !== nextProps.datum;

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

const shouldListUpdate = (lastProps, nextProps) =>
    lastProps.start !== nextProps.start ||
    lastProps.end !== nextProps.end ||
    lastProps.data !== nextProps.data ||
    lastProps.rowHeight !== nextProps.rowHeight ||
    lastProps.component !== nextProps.component;

export default class ListWrapper extends Component {
    render({ data, scrollTop, viewportHeight, rowHeight, component }) {
        const [start, end] = getVisibleRows({
            scrollTop,
            viewportHeight,
            rowHeight,
            rowsCount: data.length
        });
        const keys = this.keys = getKeysByIndex(this.keys, start, end);
        return (
            <List
                onComponentShouldUpdate={shouldListUpdate}
                data={data}
                rowHeight={rowHeight}
                component={component}
                start={start}
                end={end}
                keys={keys}
            />
        );
    }
}
