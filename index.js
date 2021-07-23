const _ = require('lodash');
console.log('Clocking ...')
const objA = {
    nest1: {
        nest2: {
            log: 'test log'
        }
    }
};
const objB = _.cloneDeep(objA)
console.log(objB);
