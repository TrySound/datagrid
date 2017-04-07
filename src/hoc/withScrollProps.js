import React from 'react';

export default BaseComponent => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0,
            scrollLeft: 0,
            viewportWidth: props.viewportWidth,
            viewportHeight: props.viewportHeight
        };
        this.ref = element => {
            this.element = element;
            if (element) {
                this.setState({
                    viewportWidth: element.clientWidth,
                    viewportHeight: element.clientHeight
                });
            }
        };
        this.onScroll = e => this.setState({
            scrollTop: e.target.scrollTop,
            scrollLeft: e.target.scrollLeft
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.viewportWidth !== nextProps.viewportWidth ||
            this.props.viewportHeight !== nextProps.viewportHeight
        ) {
            if (this.element) {
                this.setState({
                    viewportWidth: this.element.clientWidth,
                    viewportHeight: this.element.clientHeight
                });
            }
        }
    }

    render() {
        return (
            <div style={{ width: this.props.viewportWidth, height: this.props.viewportHeight, overflow: 'auto' }}
                onScroll={this.onScroll}
                ref={this.ref}>
                <BaseComponent {...this.props} {...this.state} />
            </div>
        );
    }
};
