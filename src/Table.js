import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import List from './List.js';
import DefaultRow from './DefaultRow.js';

const createRowComponent = ({ columns, component: Row = DefaultRow }) => ({ datum, index }) =>
    <Row columns={columns} datum={datum} index={index} />;

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
