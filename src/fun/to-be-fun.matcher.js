import messageFun from './fun.messager.js';


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


// noinspection JSUnusedGlobalSymbols
export default toBeFun;
