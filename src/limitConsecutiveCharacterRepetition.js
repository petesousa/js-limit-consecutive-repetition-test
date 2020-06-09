/*
* Summary: This function limits the repetition of consecutive
* characters to a defined number
*
* @param {string} input - String to apply limit of consecutive characters
* @param {number} limit - Maximum consecutive character repetition
*
* @return {string} output - A new string with the limit applied
-------------------------------------------------------------------------
Expected output for "aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee"
-------------------------------------------------------------------------
0:
1: abytfhjnbcde
2: aabbytffhhjnnbccddee
3: aaabbbytfffhhhjnnbccdddeee
4: aaaabbbbytffffhhhjnnbccddddeeee
5: aaaaabbbbbytfffffhhhjnnbccdddddeeeee
-------------------------------------------------------------------------
*/
function limitConsecutiveCharacterRepetition(input, limit) {
  const output = input;

  return output
}

module.exports = limitConsecutiveCharacterRepetition;
