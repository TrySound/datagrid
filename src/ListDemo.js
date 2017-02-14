import createElement from 'inferno-create-element';
import trackScrollTop from './decorators/trackScrollTop.js';
import List from './List.js';

const TrackedList = trackScrollTop(List);

const Row = ({ datum, index }) => (
    <div style={{ height: 'inherit', background: index % 2 === 0 ? '#eee' : '#fff' }}>
        {datum}
    </div>
);

const data = Array(100000).fill(0).map((item, index) => `Title ${index}`);

const ListDemo = () => (
    <TrackedList
        width={800}
        height={400}
        rowHeight={30}
        data={data}
        component={Row}
     />
);

export default ListDemo;
