import messageMap from '../util/message-map.fn.js';


const toMapEqual = (

    function toMapEquals(fn, result, ...args) {

        const actual = fn(...args);

        const test = this.equals(result, actual); // eslint-disable-line no-invalid-this

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


export default toMapEqual;
