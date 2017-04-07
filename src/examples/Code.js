import React from 'react';
import hljs from 'highlight.js/lib/highlight.js';
import javascript from 'highlight.js/lib/languages/javascript.js';
import 'highlight.js/styles/monokai.css';

hljs.registerLanguage('javascript', javascript);

export default class Code extends React.Component {
    constructor(props) {
        super(props);
        this.html = hljs.highlightAuto(props.value).value;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.html = hljs.highlightAuto(nextProps.value).value;
        }
    }

    render() {
        return (
            <pre style={{ margin: '0 0 0 15px' }}>
                <code className='hljs' dangerouslySetInnerHTML={{ __html: this.html }}></code>
            </pre>
        );
    }
}
