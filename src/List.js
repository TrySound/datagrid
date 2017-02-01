import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import { getVisibleRows, getKeysByIndex } from './utils.js';

const Canvas = ({ height, children }) => (
    <div style={{ height }}>
        {children}
    </div>
);

const Rendered = ({ height, top, children }) => (
    <div style={{ position: 'absolute', left: 0, right: 0, top, height }}>
        {children}
    </div>
);

const RowWrapper = ({ height, entity, index, row: Row }) => (
    <div style={{ height }}>
        <Row entity={entity} index={index} />
    </div>
);

const shouldRowUpdate = (lastProps, nextProps) =>
    lastProps.height !== nextProps.height ||
    lastProps.row !== nextProps.row ||
    lastProps.entity !== nextProps.entity;

const List = ({ data, rowHeight, row, start, end, keys }) => (
    <Canvas height={data.length * rowHeight}>
        <Rendered top={start * rowHeight} height={(end - start) * rowHeight}>
            {data.slice(start, end).map((entity, index) =>
                <RowWrapper
                    onComponentShouldUpdate={shouldRowUpdate}
                    key={keys[start + index]}
                    height={rowHeight}
                    index={start + index}
                    entity={entity}
                    row={row}
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
    lastProps.row !== nextProps.row;

export default class ListWrapper extends Component {
    render({ data, scrollTop, viewportHeight, rowHeight, row }) {
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
                row={row}
                start={start}
                end={end}
                keys={keys}
            />
        );
    }
}
