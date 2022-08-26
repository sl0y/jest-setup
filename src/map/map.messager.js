import neg from '../util/neg.fn.js';
import pos from '../util/pos.fn.js';


const messageMap = (

    ({that, test, fn, args, actual, result}) => {

        const act = that.utils.printExpected(actual);
        const res = that.utils.printReceived(result);
        const arg = that.utils.printReceived(args);

        return (
            test
                ? neg(`Expected ${fn} to not map ${arg} -> ${res}, instead got ${act}`)
                : pos(`Expected ${fn} to map ${arg} -> ${res}, instead got ${act}`)

        );
    }

);


export default messageMap;
