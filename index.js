const _ = require('lodash');
console.log('Clocking ...')
const objA = { nest1: { nest2: { log: 'test log' } } };
const copier = (copyFrom) => {
    return _.cloneDeep(copyFrom);
};
const objB = copier(objA);
console.log(objB);
