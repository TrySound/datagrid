import { expect } from 'chai';
import { mount } from '../utils/testUtils.js';
import shouldUpdate from './shouldUpdate.js';

describe('shouldUpdate hoc', () => {
    it('checks changes with test function', () => {
        let times = 0;
        const wrapped = shouldUpdate((props, nextProps) => props.param1 !== nextProps.param1)(() => times += 1);
        const setProps = mount(wrapped);
        setProps({
            param1: 10
        });
        expect(times).to.equal(1);
        setProps({
            param1: 10
        });
        expect(times).to.equal(1);
        setProps({
            param1: 11
        });
        expect(times).to.equal(2);
        setProps({
            param1: 11,
            param2: 20
        });
        expect(times).to.equal(2);
    });
});
