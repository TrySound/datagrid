import { expect } from 'chai';
import { mount } from '../utils/testUtils.js';
import withLinkedHandlers from './withLinkedHandlers.js';

describe('withLinkedHandlers hoc', () => {
    it('curries handlers like inferno\'s linkEvent', () => {
        const result = [];
        const wrapped = withLinkedHandlers({
            handler: (...args) => result.push(args)
        })(props => props.handler(1)(2));
        const { setProps } = mount(wrapped);
        setProps();
        expect(result[0]).to.deep.equal([1, 2]);
    });

    it('passes same function with different first arguments', () => {
        const result = [];
        const wrapped = withLinkedHandlers({
            handler: () => {}
        })(props => result.push(props.handler(props.param)));
        const { setProps } = mount(wrapped);
        setProps({ param: 1 });
        setProps({ param: 2 });
        expect(result[0]).to.be.a('function');
        expect(result[1]).to.be.a('function');
        expect(result[0]).to.equal(result[1]);
        expect(result.length).to.equal(2);
    });
});
