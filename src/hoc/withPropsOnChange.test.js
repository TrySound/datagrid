import { expect } from 'chai';
import { mount } from '../utils/testUtils.js';
import withPropsOnChange from './withPropsOnChange.js';

describe('withPropsOnChange hoc', () => {
    it('calls mapper on prop change', () => {
        const result = [];
        const wrapped = withPropsOnChange(['param1'], props => result.push(props))(() => {});
        const { setProps } = mount(wrapped);
        setProps({ param1: 10, param2: 20 });
        setProps({ param1: 11, param2: 20 });
        setProps({ param1: 11, param2: 21 });
        expect(result).to.deep.equal([
            { param1: 10, param2: 20 },
            { param1: 11, param2: 20 }
        ]);
    });

    it('passes mapped props with previous', () => {
        const result = [];
        const wrapped = withPropsOnChange(['param1'], props => ({
            param1: props.param1 + 1,
            param2: props.param1 + 2
        }))(props => result.push(props));
        const { setProps } = mount(wrapped);
        setProps({ param0: -1, param1: 1 });
        setProps({ param0: -10, param1: 1 });
        setProps({ param0: -10, param1: 2 });
        expect(result).to.deep.equal([
            { param0: -1, param1: 2, param2: 3 },
            { param0: -10, param1: 2, param2: 3 },
            { param0: -10, param1: 3, param2: 4 }
        ]);
    });
});
