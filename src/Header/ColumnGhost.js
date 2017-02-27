import createElement from 'inferno-create-element';

export default ({ x, children }) => (
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, transform: `translateX(${x}px)` }}>
        {children}
    </div>
);
