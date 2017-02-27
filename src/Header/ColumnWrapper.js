import createElement from 'inferno-create-element';

export default ({ column, index, ghost, component: Column, callback }) => (
    <div style={{ width: column.width }}>
        <Column column={column} index={index} ghost={ghost} callback={callback} />
    </div>
);
