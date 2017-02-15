import createElement from 'inferno-create-element';
import { withScrollTopProp } from '../decorators/index.js';
import List from '../List.js';
import DefaultRow from '../DefaultRow.js';

const TrackedList = withScrollTopProp(List);

const columns = [
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
];

const data = Array(100000).fill(0).map((item, index) => ({
    col1: index,
    col2: `Title ${index}`,
    col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}));

const Row = ({ datum, index }) => (
    <DefaultRow columns={columns} datum={datum} index={index} />
);

export default () => (
    <div>
        <h2>List example</h2>
        <TrackedList
            viewportWidth={600}
            viewportHeight={360}
            rowHeight={30}
            data={data}
            component={Row}
         />
    </div>
);
