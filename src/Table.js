import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import List from './List.js';

const getRowColor = index => index % 2 === 0 ? '#eee' : '#fff';

export const DefaultRow = ({ columns, datum, index }) => (
    <div style={{ display: 'flex', alignItems: 'center', height: 'inherit', background: getRowColor(index) }}>
        {columns.map((item, columnIndex) =>
            <div style={{ width: item.width, padding: '0 8px' }}>
                {datum[item.name]}
            </div>
        )}
    </div>
);

const createRowComponent = ({ columns, component: Row = DefaultRow }) => ({ datum, index }) => {
    return <Row columns={columns} datum={datum} index={index} />;
}

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: createRowComponent(props)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.columns !== nextProps.columns || this.props.component !== nextProps.component) {
            this.setState({
                component: createRowComponent(nextProps)
            });
        }
    }

    render({ data, scrollTop, viewportHeight, rowHeight }, { component }) {
        return (
            <List
                data={data}
                scrollTop={scrollTop}
                viewportHeight={viewportHeight}
                rowHeight={rowHeight}
                component={component}
            />
        );
    }
}
