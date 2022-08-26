import neg from '../util/neg.fn.js';
import pos from '../util/pos.fn.js';


const messageFun = (

    // eslint-disable-next-line no-shadow
    ({that, actual, test, name}) => {

        const act = that.utils.printReceived(actual);

        return test
            ? (
                name
                    ? neg(`Expected "${name}" not to be function, instead got ${act}`)
                    : neg(`Expected ${act} not to be function`)
            )
            : (
                name
                    ? pos(`Expected "${name}" to be function, instead got ${act}`)
                    : pos(`Expected ${act} to be function`)
            );
    }
);


export default messageFun;
