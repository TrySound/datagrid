import React from 'react';

export default ({ offset = 3, style = {} } = {}) => BaseComponent => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dragging: false
        };
        this.ref = this.ref.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    ref(element) {
        this.element = element;
    }

    onMouseDown(downEvent) {
        const clientX = this.element.getBoundingClientRect().left;
        const startX = downEvent.clientX - clientX;
        const onMouseMove = e => {
            e.preventDefault();
            const x = e.clientX - clientX;
            const dx = x - startX;
            if (this.state.dragging || Math.abs(dx) > offset) {
                this.setState({
                    dragging: true,
                    dx,
                    x
                });
            }
        };
        const onMouseUp = e => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            if (this.state.dragging || Math.abs(e.clientX - clientX - startX) > offset) {
                this.setState({
                    dragging: false
                });
            }
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    render() {
        return (
            <div onMouseDown={this.onMouseDown} ref={this.ref} style={style}>
                <BaseComponent {...this.props} {...this.state} />
            </div>
        );
    }
};
