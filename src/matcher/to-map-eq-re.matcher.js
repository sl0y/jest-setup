import messageMap from '../util/message-map.fn.js';


const toMapEqRe = (

    function toMapEquivalentRegExp(fn, result, ...args) {

        const actual = fn(...args);

        const test = (
            result instanceof RegExp && actual instanceof RegExp && result.toString() === actual.toString()
        );

        return messageMap({
            that: this, // eslint-disable-line no-invalid-this
            test,
            fn,
            args,
            actual,
            result,
        });
    }

);


export default toMapEqRe;
