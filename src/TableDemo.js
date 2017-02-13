import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Table from './Table.js';

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
                    rowHeight={30} />
            </div>
        );
    }
}
