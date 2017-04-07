import React from 'react';
import ReactDOM from 'react-dom';

export const mount = (MountingComponent) => {
    const wrapper = document.createElement('div');
    return {
        getWrapper: () => wrapper,
        setProps: props => ReactDOM.render(<MountingComponent {...props} />, wrapper)
    };
};
