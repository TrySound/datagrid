import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import List from './List.js';

const Column = ({ column, datum, index }) => (
    <div style={{ width: column.width }}>
        {datum}
    </div>
);

const Row = ({ columns, datum, index, rowHeight, component: Column }) => (
    <div style={{ display: 'flex', alignItems: 'stretch', height: 'inherit' }}>
        {columns.map((item, columnIndex) =>
            <Column column={item} datum={datum[item.name]} index={columnIndex} />
        )}
    </div>
);

class Table extends Component {
    constructor() {
        super();
        this.component = ({ datum, index }) => (
            <Row
                columns={this.props.columns}
                datum={datum}
                index={index}
                component={this.props.component} />
        );
    }

    render({ data, scrollTop, viewportHeight, rowHeight }) {
        return (
            <List
                data={data}
                scrollTop={scrollTop}
                viewportHeight={viewportHeight}
                rowHeight={rowHeight}
                component={this.component}
            />
        );
    }
}

export default class Viewport extends Component {
    constructor() {
        super();

        this.state = {
            scrollTop: 0,
            columns: [
                {
                    name: 'col1',
                    width: 100
                },
                {
                    name: 'col2',
                    width: 150
                },
                {
                    name: 'col3',
                    width: 200
                }
            ],
            data: Array(500000).fill(0).map((item, i) => ({
                col1: i,
                col2: `Title ${i}`,
                col3: 'lorem'
            }))
        };

        this.ref = element => {
            this.element = element;
            this.setState({
                scrollTop: element.scrollTop,
                viewportHeight: element.clientHeight
            });
        };

        this.onScroll = e => {
            this.setState({
                scrollTop: e.target.scrollTop
            });
        };
    }

    render({}, { columns, data, scrollTop, viewportHeight }) {
        return (
            <div className="viewport" style={{ width: 800, height: 400, overflow: 'auto' }}
                onScroll={this.onScroll}
                ref={this.ref}>
                <Table
                    columns={columns}
                    data={data}
                    scrollTop={scrollTop}
                    viewportHeight={viewportHeight}
                    rowHeight={30}
                    component={Column} />
            </div>
        );
    }
}
