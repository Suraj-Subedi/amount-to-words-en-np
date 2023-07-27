/* eslint-disable eqeqeq */
const ones = [
  '',
  'one ',
  'two ',
  'three ',
  'four ',
  'five ',
  'six ',
  'seven ',
  'eight ',
  'nine ',
  'ten ',
  'eleven ',
  'twelve ',
  'thirteen ',
  'fourteen ',
  'fifteen ',
  'sixteen ',
  'seventeen ',
  'eighteen ',
  'nineteen '
]
const tens = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
]

const regex = /^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/

const getSmallerTerm = (n) => ones[Number(n)]
const getLargerTerm = (n) => tens[n[0]] + ' ' + ones[n[1]]

module.exports = function numWords (input) {
  const num = Number(input)
  if (isNaN(num)) return ''
  if (num === 0) return 'zero'

  const numStr = num.toString()
  if (numStr.length > 13) {
    throw new Error('overflow') // Does not support converting more than 9 digits yet
  }

  const [, n7, n6, n5, n4, n3, n2, n1] = ('0000000000000' + numStr)
    .substr(-13)
    .match(regex) // left pad zeros

  let str = ''
  str += n7 != 0 ? (getSmallerTerm(n7) || getLargerTerm(n7)) + 'kharab ' : ''
  str += n6 != 0 ? (getSmallerTerm(n6) || getLargerTerm(n6)) + 'arab ' : ''
  str += n5 != 0 ? (getSmallerTerm(n5) || getLargerTerm(n5)) + 'crore ' : ''
  str += n4 != 0 ? (getSmallerTerm(n4) || getLargerTerm(n4)) + 'lakh ' : ''
  str += n3 != 0 ? (getSmallerTerm(n3) || getLargerTerm(n3)) + 'thousand ' : ''
  str += n2 != 0 ? getSmallerTerm(n2) + 'hundred ' : ''
  str += n1 != 0 && str != '' ? 'and ' : ''
  str += n1 != 0 ? getSmallerTerm(n1) || getLargerTerm(n1) : ''

  return str.trim()
}
