import Component from 'inferno-component';
import createElement from 'inferno-create-element';

const Canvas = ({ children }) => (
    <div>
        {children}
    </div>
);

const Sector = ({ height, top, children }) => (
    <div style={{ position: 'absolute', left: 0, right: 0, top, height }}>
        {children}
    </div>
);

const RowWrapper = ({ height, entity, row: Row }) => (
    <div style={{ height }}>
        <Row entity={entity} />
    </div>
);

const shouldRowUpdate = (lastProps, nextProps) =>
    lastProps.height !== nextProps.height ||
    lastProps.row !== nextProps.row ||
    lastProps.entity !== nextProps.entity;

const List = ({ data, getKey, start, end, rowHeight, row }) => (
    <Canvas>
        <Sector top={start * rowHeight} height={(end - start) * rowHeight}>
            {data.slice(start, end).map((entity, index) =>
                <RowWrapper
                    onComponentShouldUpdate={shouldRowUpdate}
                    key={getKey(entity)}
                    height={rowHeight}
                    row={row}
                    entity={entity}
                />
            )}
        </Sector>
        <Sector top={end * rowHeight} height={(data.length - end) * rowHeight} />
    </Canvas>
);

export default List;
