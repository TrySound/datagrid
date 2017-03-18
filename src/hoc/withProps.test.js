import { mount } from '../utils/testUtils.js';
import withProps from './withProps.js';

describe('withProps hoc', () => {
    it('sets props', () => {
        const results = [];
        const wrapped = withProps(props => ({
            param11: props.param1 + 1,
            param22: props.param2 + 2
        }))(props => results.push(props));
        const { setProps } = mount(wrapped);
        setProps({
            param1: 10,
            param2: 20
        });
        expect(results[0]).toEqual({
            param1: 10,
            param2: 20,
            param11: 11,
            param22: 22
        });
    });
});
