'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

 function yell(chaine){
     let upCase = chaine.toUpperCase();
     return upCase;
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('You must write your own tests'), 'YOU MUST WRITE YOUR OWN TESTS')
assert.strictEqual(yell('mylanne'), 'MYLANNE')
assert.strictEqual(yell('joel'), 'JOEL')
// End of tests */
