import { render } from 'inferno';
import createElement from 'inferno-create-element';

export const mount = (MountingComponent) => {
    const wrapper = document.createElement('div');
    return {
        getWrapper: wrapper,
        setProps: props => render(<MountingComponent {...props} />, wrapper)
    };
};
