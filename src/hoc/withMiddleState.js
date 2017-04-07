import React from 'react';

export default reducer => BaseComponent => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = reducer(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(reducer(nextProps, this.state));
    }

    render() {
        return <BaseComponent {...this.props} {...this.state} />;
    }
};
