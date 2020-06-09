const limitConsecutiveCharacterRepetition = require('./limitConsecutiveCharacterRepetition');

[0,1,2,3,4,5].forEach(n => {
  const output = limitConsecutiveCharacterRepetition('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee', n)
  console.log(`${n}: ${output}`)
})

module.exports = limitConsecutiveCharacterRepetition;
