import toBeFun from './fun/to-be-fun.matcher.js';
import toHaveKeys from './keys/to-have-keys-equal.matcher.js';
import toMapEqRe from './map/to-map-eq-re.matcher.js';
import toMapEqual from './map/to-map-equal.matcher.js';
import toMapExact from './map/to-map-exact.matcher.js';


const setup = {

    toBeFun,

    toMapExact, toMap:       toMapExact,
    toMapEqual, toMapEquals: toMapEqual,
    toMapEquRe:              toMapEqRe, toMapEquivalentRe: toMapEqRe, toMapEqRe,

    toHaveKeys,

};


export default setup;
