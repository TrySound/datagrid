import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import Grid from './Grid.js';

const getTableWidth = columns => columns.reduce((acc, column) => acc + column.width, 0);

export default class PinnableGrid extends Component {
    constructor(props) {
        super(props);
        const leftColumns = props.columns.filter(column => column.pinnedLeft);
        const centerColumns = props.columns.filter(column => !column.pinnedLeft && !column.pinnedRight);
        const rightColumns = props.columns.filter(column => column.pinnedRight);
        this.state = {
            leftWidth: getTableWidth(leftColumns),
            leftColumns,
            centerWidth: getTableWidth(centerColumns),
            centerColumns,
            rightWidth: getTableWidth(rightColumns),
            rightColumns
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.columns !== nextProps.columns) {
            const leftColumns = nextProps.columns.filter(column => column.pinnedLeft);
            const centerColumns = nextProps.columns.filter(column => !column.pinnedLeft && !column.pinnedRight);
            const rightColumns = nextProps.columns.filter(column => column.pinnedRight);
            this.setState({
                leftWidth: getTableWidth(leftColumns),
                leftColumns,
                centerWidth: getTableWidth(centerColumns),
                centerColumns,
                rightWidth: getTableWidth(rightColumns),
                rightColumns
            });
        }
    }

    render(props, { leftColumns, leftWidth, centerColumns, centerWidth, rightColumns, rightWidth }) {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ position: 'sticky', zIndex: 1, left: 0, width: leftWidth }}>
                    {leftColumns.length ? createElement(Grid, Object.assign({}, props, {
                        columns: leftColumns
                    })): ''},
                </div>
                <div style={{ width: centerWidth }}>
                    {createElement(Grid, Object.assign({}, props, {
                        columns: centerColumns
                    }))}
                </div>
                <div style={{ position: 'sticky', zIndex: 1, right: 0, width: rightWidth }}>
                    {rightColumns.length ? createElement(Grid, Object.assign({}, props, {
                        columns: rightColumns
                    })) : ''}
                </div>
            </div>
        );
    }
}
