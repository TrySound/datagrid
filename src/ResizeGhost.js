import createElement from 'inferno-create-element';

export default ({ x }) => (
    <div style={{
        position: 'absolute',
        zIndex: 3,
        top: 0,
        bottom: 0,
        borderLeft: '1px dotted #000',
        pointerEvents: 'none',
        transform: `translateX(${x}px)`
    }}>
    </div>
);
