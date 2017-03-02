import { render } from 'inferno';
import createElement from 'inferno-create-element';

export const mount = (MountingComponent) => {
    const stub = document.createElement('div');
    return props => render(<MountingComponent {...props} />, stub);
};
