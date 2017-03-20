import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import { withScrollProps, Grid } from '../../index.js';

const TrackedGrid = withScrollProps(Grid);

const columns = [
    {
        name: 'col1',
        width: '20%'
    },
    {
        name: 'col2',
        width: '35%'
    },
    {
        name: 'col3',
        width: '45%'
    }
];

const data = Array(100000).fill(0).map((item, i) => ({
    col1: i,
    col2: `Col2 ${i}`,
    col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}));

export default class Minimal extends Component {
    render() {
        return (
            <TrackedGrid
                viewportWidth={720}
                viewportHeight={480}
                columns={columns}
                data={data} />
        );
    }
}
