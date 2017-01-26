import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import List from './List.js';
import { computeLayout } from './utils.js';

function shallowDiffers(a, b) {
    for (let i in a) {if (!(i in b)) {return true;}}
    for (let i in b) {if (a[i] !== b[i]) {return true;}}
    return false;
}

const data = Array(1000).fill(0).map((item, i) => ({
    title: `Title ${i}`
}))

const container = document.createElement('div');

document.body.appendChild(container);

class Row extends Component {
    render({ entity }) {
        console.log(entity.title);
        return (
            <div>{entity.title}</div>
        );
    }
}

class Viewport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data,
            scrollTop: 0
        };

        this.ref = element => {
            this.setState({
                scrollTop: element.scrollTop
            });
        };

        this.onScroll = e => {
            this.setState({
                scrollTop: e.target.scrollTop
            });
        };

        this.onClick = () => {
            console.log('click');
            this.setState({
                data: this.state.data.map((item, index) => {
                    if (index === 8) {
                        return Object.assign({}, item, {
                            title: item.title + '_|'
                        });
                    }
                    return item;
                })
            });
        };
    }

    render() {
        const rowHeight = 30;
        const { start, end } = computeLayout({
            viewportHeight: document.documentElement.clientHeight,
            rowHeight,
            scrollTop: this.state.scrollTop,
            rowsCount: data.length
        });
        const getKey = entity => entity.title;
        return (
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, overflow: 'auto', display: 'flex' }}
                onScroll={this.onScroll}
                ref={this.ref}
                onClick={this.onClick}>
                <div style={{ position: 'relative', flex: 1 }}>
                    <List
                        data={this.state.data}
                        start={start}
                        end={end}
                        rowHeight={rowHeight}
                        row={Row}
                        getKey={getKey}
                        onComponentShouldUpdate={shallowDiffers}
                    />
                </div>
            </div>
        );
    }
}

Inferno.render(
    <Viewport />,
    container
);
