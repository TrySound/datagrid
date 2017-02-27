import createElement from 'inferno-create-element';
import withPropsOnChange from './withPropsOnChange.js';
import { pinnedZindex } from '../params.js';

export default BaseComponent => withPropsOnChange(['columns'], ({ columns }) => ({
    leftColumns: columns.filter(column => column.pinnedLeft),
    centerColumns: columns.filter(column => !column.pinnedLeft && !column.pinnedRight),
    rightColumns: columns.filter(column => column.pinnedRight)
}))(props => (
    <div style={{ display: 'flex' }}>
        {props.leftColumns.length !== 0 &&
            <div style={{ position: 'sticky', zIndex: pinnedZindex, left: 0 }}>
                {createElement(BaseComponent, Object.assign({}, props, { columns: props.leftColumns }))}
            </div>
        }
        {createElement(BaseComponent, Object.assign({}, props, { columns: props.centerColumns }))}
        {props.rightColumns.length !== 0 &&
            <div style={{ position: 'sticky', zIndex: pinnedZindex, right: 0 }}>
                {createElement(BaseComponent, Object.assign({}, props, { columns: props.rightColumns }))}
            </div>
        }
    </div>
));
