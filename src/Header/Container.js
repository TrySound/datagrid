import createElement from 'inferno-create-element';

export default ({ children }) => (
    <div style={{ display: 'flex', position: 'relative', height: 'inherit' }}>
        {children}
    </div>
);
