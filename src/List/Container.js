import createElement from 'inferno-create-element';

export default ({ height, renderedTop, children }) => (
    <div style={{ position: 'relative', height }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: renderedTop }}>
            {children}
        </div>
    </div>
);
