import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Grid from './Grid.js';
import { pinnedZindex } from './params.js';

const splitColumns = columns => ({
    leftColumns: columns.filter(column => column.pinnedLeft),
    centerColumns: columns.filter(column => !column.pinnedLeft && !column.pinnedRight),
    rightColumns: columns.filter(column => column.pinnedRight)
});

export default class PinnableGrid extends Component {
    constructor(props) {
        super(props);
        this.state = splitColumns(props.columns);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.columns !== nextProps.columns) {
            this.setState(splitColumns(nextProps.columns));
        }
    }

    render(props, { leftColumns, centerColumns, rightColumns }) {
        return (
            <div style={{ display: 'flex' }}>
                {leftColumns.length !== 0 &&
                    <div style={{ position: 'sticky', zIndex: pinnedZindex, left: 0 }}>
                        {createElement(Grid, Object.assign({}, props, { columns: leftColumns }))}
                    </div>
                }
                {createElement(Grid, Object.assign({}, props, { columns: centerColumns }))}
                {rightColumns.length !== 0 &&
                    <div style={{ position: 'sticky', zIndex: pinnedZindex, right: 0 }}>
                        {createElement(Grid, Object.assign({}, props, { columns: rightColumns }))}
                    </div>
                }
            </div>
        );
    }
}
