import {describe, expect, it} from '@jest/globals';
import setup from './index.js';


const KEYS = [
    'toBeFun',
    //
    'toMapExact', 'toMap',
    //
    'toMapEqual', 'toMapEquals',
    //
    'toMapEquRe', 'toMapEquivalentRe', 'toMapEqRe',
    //
    'toHaveKeys',
];


describe('setup', () => {

    it(
        'has the keys',
        () => void expect(setup).toHaveKeys(KEYS),
    );

    describe.each(KEYS)('key', key => {

        describe(`${key}`, () => {

            const fn = setup[key];

            it(
                'is a function',
                () => void expect(fn).toBeFun(),
            );

        });
    });

});
