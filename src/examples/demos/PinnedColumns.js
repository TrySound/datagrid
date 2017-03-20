import createElement from 'inferno-create-element';
import { withScrollProps, Grid } from '../../index.js';

const TrackedGrid = withScrollProps(Grid);

const columns = [
    {
        name: 'col1',
        width: '50%'
    },
    {
        name: 'col11',
        width: 120,
        pinnedLeft: true
    },
    {
        name: 'col2',
        width: '50%'
    },
    {
        name: 'col21',
        width: 120,
        pinnedRight: true
    }
];

const data = Array(100000).fill(0).map((item, i) => ({
    col11: `Pinned left ${i}`,
    col1: i,
    col2: `Title ${i}`,
    col21: `Pinned right ${i}`,
    col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}));

export default () => (
    <TrackedGrid
        viewportWidth={600}
        viewportHeight={360}
        columns={columns}
        data={data} />
);
