import { mount } from '../utils/testUtils.js';
import withPinnedColumns from './withPinnedColumns.js';

describe('withPinnedColumns hoc', () => {
    it('splits columns to three groups', () => {
        const result = [];
        const wrapped = withPinnedColumns()(props => result.push(props));
        const { setProps } = mount(wrapped);
        setProps({
            userParam: -1,
            columns: [
                { name: '1' },
                { name: '2', pinnedRight: true },
                { name: '3', pinnedLeft: true },
                { name: '4'},
                { name: '5', pinnedLeft: true }
            ]
        });
        expect(result.length).toEqual(3);
        expect(result[0].userParam).toEqual(-1);
        expect(result[0].columns).toEqual([
            { name: '3', pinnedLeft: true },
            { name: '5', pinnedLeft: true }
        ]);
        expect(result[1].userParam).toEqual(-1);
        expect(result[1].columns).toEqual([
            { name: '1' },
            { name: '4' }
        ]);
        expect(result[2].userParam).toEqual(-1);
        expect(result[2].columns).toEqual([
            { name: '2', pinnedRight: true }
        ]);
    });

    it('does not render left and right group without columns', () => {
        const result = [];
        const wrapped = withPinnedColumns()(props => result.push(props));
        const { setProps } = mount(wrapped);
        setProps({
            columns: [
                { name: '1' }
            ]
        });
        expect(result.length).toEqual(1);
        expect(result[0].columns).toEqual([
            { name: '1' }
        ]);
    });
});
