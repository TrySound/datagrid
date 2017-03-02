import { expect } from 'chai';
import { mount } from '../utils/testUtils.js';
import withHandlers from './withHandlers.js';

describe('withHandlers hoc', () => {
    it('passes handlers to props', () => {
        const result = [];
        const wrapped = withHandlers({
            handler1: () => 1,
            handler2: () => 2
        })(props => {
            result.push(props.handler1());
            result.push(props.handler2());
        });
        const { setProps } = mount(wrapped);
        setProps();
        setProps();
        expect(result).to.deep.equal([1, 2, 1, 2]);
    });

    it('binds props as a first parameter', () => {
        const result = [];
        const wrapped = withHandlers({
            handler: (props, arg) => result.push(props, arg)
        })(props => {
            props.handler(1);
        });
        const { setProps } = mount(wrapped);
        setProps({ param: 2 });
        setProps({ param: 3 });
        expect(result).to.deep.equal([
            { param: 2 },
            1,
            { param: 3 },
            1
        ]);
    });
});
