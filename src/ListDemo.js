import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import List from './List.js';

const Row = ({ entity, index }) => (
    // console.log(entity),
    <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        height: 30,
        background: index % 2 === 0 ? 'lightgrey': ''
    }}>{entity}</div>
);

class Viewport extends Component {
    constructor() {
        super();

        this.state = {
            scrollTop: 0
        };

        this.ref = element => {
            this.element = element;
            this.setState({
                scrollTop: element.scrollTop,
                viewportHeight: element.clientHeight
            });
        };

        this.onScroll = e => {
            this.setState({
                scrollTop: e.target.scrollTop
            });
        };
    }

    render({ data }, { scrollTop, viewportHeight }) {
        return (
            <div className="viewport" style={{ width: 800, height: 400, overflow: 'auto' }}
                onScroll={this.onScroll}
                ref={this.ref}>
                <List
                    data={data}
                    scrollTop={scrollTop}
                    viewportHeight={viewportHeight}
                    rowHeight={30}
                    row={Row}
                />
            </div>
        );
    }
}

const data = Array(500000).fill(0).map((item, i) => `Title ${i}`);

const container = document.createElement('div');
container.classList.add('app');

document.body.appendChild(container);

Inferno.render(<Viewport data={data} />, container);
