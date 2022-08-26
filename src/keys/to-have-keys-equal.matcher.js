import messageKeys from './keys.messager.js';


const keysOf = (

    $ => $
        ? Object.keys($).sort()
        : []

);


const toHaveKeys = (

    // eslint-disable-next-line no-shadow
    function toHaveKeys(actual, keys) {

        const that = this; // eslint-disable-line no-invalid-this
        
        const actualKeys = keysOf(actual);
        const expectedKeys = keys.sort();

        const test = that.equals(expectedKeys, actualKeys);

        // noinspection JSUnresolvedFunction
        return messageKeys({
            that,
            test,
            actual,
            keys:     actualKeys,
            expected: expectedKeys,
        });

    }

);


// noinspection JSUnusedGlobalSymbols
export default toHaveKeys;
