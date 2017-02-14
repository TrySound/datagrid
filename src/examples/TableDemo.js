import createElement from 'inferno-create-element';
import withScrollTopProp from '../decorators/withScrollTopProp.js';
import Table from '../Table.js';

const TrackedTable = withScrollTopProp(Table);

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

export default () => (
    <div>
        <h2>Table example</h2>
        <TrackedTable
            width={600}
            height={360}
            viewportHeight={360}
            rowHeight={30}
            columns={columns}
            data={data}
         />
    </div>
);
