import createElement from 'inferno-create-element';
import { compose } from '../utils/index.js';
import withPropsOnChange from './withPropsOnChange.js';

export default () => BaseComponent => compose(
    withPropsOnChange((props, nextProps) => props.columns !== nextProps.columns, props => ({
        leftPinnedColumns: props.columns.filter(column => column.pinnedLeft),
        centerColumns: props.columns.filter(column => !column.pinnedLeft && !column.pinnedRight),
        rightPinnedColumns: props.columns.filter(column => column.pinnedRight)
    }))
)(props =>
    <div style={{ display: 'flex' }}>
        {props.leftPinnedColumns.length !== 0 &&
            <div style={{ position: 'sticky', zIndex: 2, left: 0 }}>
                <BaseComponent {...props} columns={props.leftPinnedColumns} />
            </div>
        }
        <BaseComponent {...props} columns={props.centerColumns} />
        {props.rightPinnedColumns.length !== 0 &&
            <div style={{ position: 'sticky', zIndex: 2, right: 0 }}>
                <BaseComponent {...props} columns={props.rightPinnedColumns} />
            </div>
        }
    </div>
);
