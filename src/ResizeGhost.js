import createElement from 'inferno-create-element';
import { resizeGhostZindex } from './params.js';

const ResizeGhost = ({ x }) => (
    <div style={{
        position: 'absolute',
        zIndex: resizeGhostZindex,
        top: 0,
        bottom: 0,
        left: 0,
        borderLeft: '1px dotted #000',
        pointerEvents: 'none',
        transform: `translateX(${x}px)`
    }}>
    </div>
);

export default ResizeGhost;
