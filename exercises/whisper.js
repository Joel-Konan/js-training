'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

 function whisper(chaine){
    let lowCase = chaine.toLowerCase();
    return lowCase;
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper('MYLANNE'), 'mylanne')
// End of tests */
