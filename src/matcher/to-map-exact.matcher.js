import messageMap from '../util/message-map.fn.js';


const toMapExact = (

    function toMapExactly(fn, result, ...args) {

        const actual = fn(...args);

        const test = (actual === result);

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


export default toMapExact;
