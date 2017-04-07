import React from 'react';
import { Grid, reducer, withScrollProps } from '../../index.js';

const TrackedGrid = withScrollProps(Grid);

const data = Array(100000).fill(0).map((item, i) => ({
    col11: `Pinned left ${i}`,
    col1: i,
    col2: `Title ${i}`,
    col21: `Pinned right ${i}`,
    col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}));

export default class Viewport extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                {
                    name: 'col1',
                    enableSorting: true
                },
                {
                    name: 'col11',
                    width: 120,
                    pinnedLeft: true,
                    enableResizing: true
                },
                {
                    name: 'col2',
                    minWidth: 60,
                    enableMoving: true,
                    enableFiltering: true,
                    placeholder: 'Search',
                    width: 150,
                    enableResizing: true
                },
                {
                    name: 'col21',
                    width: 120,
                    pinnedRight: true,
                    enableResizing: true
                },
                {
                    name: 'col3',
                    displayName: 'Column 3',
                    width: 200,
                    maxWidth: 300,
                    enableMoving: true,
                    enableResizing: true
                },
                {
                    name: '4',
                    width: '50%'
                }
            ],
            gridState: {
                selectedIndex: 0
            },
            data
        };

        this.callback = this.callback.bind(this);
    }

    callback(action) {
        console.log(action);
        switch (action.type) {
            default:
                this.setState(state => reducer(state, action));
                break;
        }
    }

    render() {
        return (
            <TrackedGrid
                viewportWidth={600}
                viewportHeight={360}
                headerHeight={60}
                columnComponent={undefined}
                rowComponent={undefined}
                columns={this.state.columns}
                gridState={this.state.gridState}
                data={this.state.data}
                callback={this.callback}
            />
        );
    }
}
