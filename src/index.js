import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import List from './List.js';

const Row = ({ entity }) => (
    console.log(entity),
    <div>{entity}</div>
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

        window.addEventListener('resize', () => {
            if (this.element) {
                this.setState({
                    viewportHeight: this.element.clientHeight
                });
            }
        });
    }

    render({ data }, { scrollTop, viewportHeight }) {
        return (
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, overflow: 'auto' }}
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

const data = Array(1000).fill(0).map((item, i) => `Title ${i}`);

const container = document.createElement('div');

document.body.appendChild(container);

Inferno.render(<Viewport data={data} />, container);
