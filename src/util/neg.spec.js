/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import neg from './neg.fn.js';


const {any} = expect;


describe('neg', () => {

    it(
        'is a function',
        () => void expect(neg).toBeFun(),
    );

    it.each([
        // result, ...args
        [{message: any(Function), pass: true}, 'message'],
        [{message: any(Function), pass: true}, null],
        [{message: any(Function), pass: true}],
    ])(
        'returns correct object %p for %p',
        expect(neg).toMapEqual,
    );

    it.each([
        // result, ...args
        ['message', 'message'],
        [null, null],
        [void (1)],
    ])(
        'returns correct message function %p for %p',
        expect((...$$) => neg(...$$).message()).toMapEqual,
    );


});
