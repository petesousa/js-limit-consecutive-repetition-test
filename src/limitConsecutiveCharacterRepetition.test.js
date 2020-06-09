const limitConsecutiveCharacterRepetition = require('./limitConsecutiveCharacterRepetition');

test(`limits consecutive character repetition to 1`, () =>{
  expect(limitConsecutiveCharacterRepetition('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee', 1))
  .toBe('abytfhjnbcde')
});

test('limits consecutive character repetition to 2', () =>{
  expect(limitConsecutiveCharacterRepetition('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee', 2))
  .toBe('aabbytffhhjnnbccddee')
});

test('limits consecutive character repetition to 3', () =>{
  expect(limitConsecutiveCharacterRepetition('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee', 3))
  .toBe('aaabbbytfffhhhjnnbccdddeee')
});

test('limits consecutive character repetition to 4', () =>{
  expect(limitConsecutiveCharacterRepetition('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee', 4))
  .toBe('aaaabbbbytffffhhhjnnbccddddeeee')
});

test('limits consecutive character repetition to 5', () =>{
  expect(limitConsecutiveCharacterRepetition('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee', 5))
  .toBe('aaaaabbbbbytfffffhhhjnnbccdddddeeeee')
});

test('limits consecutive character repetition to 6', () =>{
  expect(limitConsecutiveCharacterRepetition('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee', 6))
  .toBe('aaaaaabbbbbytffffffhhhjnnbccddddddeeeee')
});

test('limits consecutive character repetition to 7', () =>{
  expect(limitConsecutiveCharacterRepetition('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee', 7))
  .toBe('aaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee')
});

test('limits consecutive character repetition to 6', () =>{
  expect(limitConsecutiveCharacterRepetition('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee', 6))
  .toBe('aaaaaabbbbbytffffffhhhjnnbccddddddeeeee')
});

test('limits consecutive character repetition to 8', () =>{
  expect(limitConsecutiveCharacterRepetition('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee', 8))
  .toBe('aaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee')
});

test('limits consecutive character repetition to 9', () =>{
  expect(limitConsecutiveCharacterRepetition('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee', 9))
  .toBe('aaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee')
});

test('limits consecutive character repetition to 10', () =>{
  expect(limitConsecutiveCharacterRepetition('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee', 10))
  .toBe('aaaaaaaaaabbbbbytfffffffhhhjnnbccddddddeeeee')
});

