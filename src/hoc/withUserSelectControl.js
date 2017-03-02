import createElement from 'inferno-create-element';

export default BaseComponent => props => (
    <div style={{ userSelect: props.columnState.resizing || props.columnState.moving ? 'none': '' }}>
        <BaseComponent {...props} />
    </div>
);
