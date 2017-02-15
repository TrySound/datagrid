import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import withScrollTopProp from '../decorators/withScrollTopProp.js';
import PinnableGrid from '../PinnableGrid.js';
import DefaultHeaderColumn from '../DefaultHeaderColumn.js';
import { defaultBorder } from '../defaults.js';
import reducer from '../reducer.js';

const TrackedGrid = withScrollTopProp(PinnableGrid);

export default class Viewport extends Component {
    constructor() {
        super();

        this.state = {
            columns: [
                {
                    name: 'col1',
                    width: 100,
                    enableFiltering: true,
                    enableSorting: true
                },
                {
                    name: 'col11',
                    width: 120,
                    pinnedLeft: true
                },
                {
                    name: 'col2',
                    minWidth: 60,
                    width: 150,
                    resizing: true
                },
                {
                    name: 'col21',
                    width: 120,
                    pinnedRight: true
                },
                {
                    name: 'col3',
                    displayName: 'Column 3',
                    width: 200,
                    maxWidth: 300,
                    moving: true
                }
            ],
            data: Array(500000).fill(0).map((item, i) => ({
                col11: `Pinned left ${i}`,
                col1: i,
                col2: `Title ${i}`,
                col21: `Pinned right ${i}`,
                col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }))
        };

        this.callback = this.callback.bind(this);
    }

    callback(action) {
        console.log(action);
        this.setState(reducer(this.state, action));
    }

    render({}, { columns, data }) {
        return (
            <div>
                <h2>Grid example</h2>
                <TrackedGrid
                    viewportWidth={600}
                    viewportHeight={360}
                    columns={columns}
                    data={data}
                    rowHeight={30}
                    headerColumnComponent={DefaultHeaderColumn}
                    rowComponent={undefined}
                    callback={this.callback}
                />
            </div>
        );
    }
}
