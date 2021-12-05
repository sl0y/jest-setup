import messageFun from '../util/message-fun.fn.js';


const toBeFun = (

    // eslint-disable-next-line no-shadow
    function toBeFun(actual, name) {

        return messageFun({
            that: this, // eslint-disable-line no-invalid-this
            actual,
            test: ('function' === typeof actual),
            name,
        });

    }

);


export default toBeFun;
