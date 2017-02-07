import createElement from 'inferno-create-element';

const Ghost = ({ x }) => (
    <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        borderLeft: '1px dotted #000',
        pointerEvents: 'none',
        transform: `translateX(${x}px)`
    }}>
    </div>
);

export default Ghost;
