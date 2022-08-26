import messageMap from './map.messager.js';


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


// noinspection JSUnusedGlobalSymbols
export default toMapExact;
