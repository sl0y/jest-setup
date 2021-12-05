import toBeFun from './matcher/to-be-fun.matcher.js';
import toMapEqRe from './matcher/to-map-eq-re.matcher.js';
import toMapEqual from './matcher/to-map-equal.matcher.js';
import toMapExact from './matcher/to-map-exact.matcher.js';


const setup = {

    toBeFun,

    toMapExact,
    toMapEqual, toMapEquals: toMapEqual,
    toMapEquRe:              toMapEqRe, toMapEquivalentRe: toMapEqRe, toMapEqRe,

};


export default setup;
