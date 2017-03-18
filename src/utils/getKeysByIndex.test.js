import { getKeysByIndex } from './index.js';

describe('getKeysByIndex', () => {
    it('should generate new keys', () => {
        expect(getKeysByIndex(undefined, 0, 2)).toEqual({
            0: 'key_0',
            1: 'key_1',
            2: 'key_2'
        });
    });

    it('should reuse passed keys', () => {
        expect(getKeysByIndex({
            2: 'key_0',
            3: 'key_1'
        }, 0, 3)).toEqual({
            0: 'key_2',
            1: 'key_3',
            2: 'key_0',
            3: 'key_1'
        });
    });

    it('should ignore pass keys with expired indexes', () => {
        expect(getKeysByIndex({
            0: 'key_0',
            1: 'key_1',
            2: 'key_2',
            3: 'key_3'
        }, 2, 5)).toEqual({
            2: 'key_2',
            3: 'key_3',
            4: 'key_0',
            5: 'key_1'
        });
    });
});
