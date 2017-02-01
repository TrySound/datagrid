import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import { getVisibleRows, getKeysByIndex } from './utils.js';

const Canvas = ({ height, children }) => (
    <div style={{ height }}>
        {children}
    </div>
);

const Sector = ({ height, top, children }) => (
    <div style={{ position: 'absolute', left: 0, right: 0, top, height }}>
        {children}
    </div>
);

const RowWrapper = ({ index, height, entity, row: Row }) => (
    <div style={{ height }} data-key={index}>
        <Row entity={entity} />
    </div>
);

const shouldRowUpdate = (lastProps, nextProps) =>
    lastProps.height !== nextProps.height ||
    lastProps.row !== nextProps.row ||
    lastProps.entity !== nextProps.entity;

export default class List extends Component {
    constructor() {
        super();
        this.keys = {};
        this.start = 0;
        this.end = 0;
    }

    shouldComponentUpdate({ data, scrollTop, viewportHeight, rowHeight, row }) {
        const prevStart = this.start;
        const prevEnd = this.end;
        const [start, end] = getVisibleRows({
            scrollTop,
            viewportHeight,
            rowHeight,
            rowsCount: data.length
        });
        this.start = start;
        this.end = end;
        return (
            prevStart !== start ||
            prevEnd !== end ||
            this.props.data !== data ||
            this.props.rowHeight !== rowHeight ||
            this.props.row !== row
        );
    }

    render({ data, rowHeight, row }) {
        const start = this.start;
        const end = this.end;
        const keys = this.keys = getKeysByIndex(this.keys, start, end);
        return (
            <Canvas height={data.length * rowHeight}>
                <Sector top={start * rowHeight} height={(end - start) * rowHeight}>
                    {data.slice(start, end).map((entity, index) =>
                        <RowWrapper
                            onComponentShouldUpdate={shouldRowUpdate}
                            key={keys[start + index]}
                            index={keys[start + index]}
                            height={rowHeight}
                            row={row}
                            entity={entity}
                        />
                    )}
                </Sector>
            </Canvas>
        );
    }
}
