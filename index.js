const _ = require('lodash');
console.log('Clocking ...')
const objA = { test: { test2: { log: 'test log' } } };
const copier = (copyFrom) => {
    return _.cloneDeep(copyFrom);
};
const objB = copier(objA);
console.log(objB);
