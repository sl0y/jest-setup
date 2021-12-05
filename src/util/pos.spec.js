/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import pos from './pos.fn.js';


const {any} = expect;


describe('pos', () => {

    it(
        'is a function',
        () => void expect(pos).toBeFun(),
    );

    it.each([
        // result, ...args
        [{message: any(Function), pass: false}, 'message'],
        [{message: any(Function), pass: false}, null],
        [{message: any(Function), pass: false}],
    ])(
        'returns correct object %p for %p',
        expect(pos).toMapEqual,
    );

    it.each([
        // result, ...args
        ['message', 'message'],
        [null, null],
        [void (1)],
    ])(
        'returns correct message function %p for %p',
        expect((...$$) => pos(...$$).message()).toMapEqual,
    );


});
