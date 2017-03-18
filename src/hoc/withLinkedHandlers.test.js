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
        expect(result[0]).toEqual([1, 2]);
    });

    it('passes same function with different first arguments', () => {
        const result = [];
        const wrapped = withLinkedHandlers({
            handler: () => {}
        })(props => result.push(props.handler(props.param)));
        const { setProps } = mount(wrapped);
        setProps({ param: 1 });
        setProps({ param: 2 });
        expect(typeof result[0]).toEqual('function');
        expect(typeof result[1]).toEqual('function');
        expect(result[0]).toEqual(result[1]);
        expect(result.length).toEqual(2);
    });
});
