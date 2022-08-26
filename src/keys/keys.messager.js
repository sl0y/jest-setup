import neg from '../util/neg.fn.js';
import pos from '../util/pos.fn.js';


const messageKeys = (

    ({that, test, actual, keys, expected}) => {

        const act = that.utils.printReceived(actual);
        const kys = that.utils.printReceived(keys);
        const exp = that.utils.printExpected(expected);

        return (
            test
                ? neg(`Expected ${act} to not have ${exp}, instead got ${kys}`)
                : pos(`Expected ${act} to have ${exp}, instead got ${kys}`)

        );
    }

);


export default messageKeys;
