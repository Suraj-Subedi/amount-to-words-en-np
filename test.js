const { test, only } = require('tap')

const numWords = require('.')

only('test playground', (t) => {
  t.end()
})

test('Should convert numbers to words correctly', (t) => {
  const assertNum = (num, words) => {
    t.equal(numWords(num), words)
  }

  assertNum(1, 'one')
  assertNum(12, 'twelve')
  assertNum(123, 'one hundred and twenty three')
  assertNum(1234, 'one thousand two hundred and thirty four')
  assertNum(12345, 'twelve thousand three hundred and forty five')
  assertNum(
    123456,
    'one lakh twenty three thousand four hundred and fifty six'
  )
  assertNum(
    1234567,
    'twelve lakh thirty four thousand five hundred and sixty seven'
  )
  assertNum(
    12345678,
    'one crore twenty three lakh forty five thousand six hundred and seventy eight'
  )
  assertNum(
    123456789,
    'twelve crore thirty four lakh fifty six thousand seven hundred and eighty nine'
  )
  assertNum(
    123456789,
    'twelve crore thirty four lakh fifty six thousand seven hundred and eighty nine'
  )

  assertNum(2, 'two')
  assertNum(23, 'twenty three')
  assertNum(234, 'two hundred and thirty four')
  assertNum(2345, 'two thousand three hundred and forty five')
  assertNum(23456, 'twenty three thousand four hundred and fifty six')
  assertNum(
    234567,
    'two lakh thirty four thousand five hundred and sixty seven'
  )
  assertNum(
    2345678,
    'twenty three lakh forty five thousand six hundred and seventy eight'
  )
  assertNum(
    23456789,
    'two crore thirty four lakh fifty six thousand seven hundred and eighty nine'
  )
  assertNum(
    234567890,
    'twenty three crore forty five lakh sixty seven thousand eight hundred and ninety'
  )

  assertNum(3, 'three')
  assertNum(34, 'thirty four')
  assertNum(345, 'three hundred and forty five')
  assertNum(3456, 'three thousand four hundred and fifty six')
  assertNum(34567, 'thirty four thousand five hundred and sixty seven')
  assertNum(
    345678,
    'three lakh forty five thousand six hundred and seventy eight'
  )
  assertNum(
    3456789,
    'thirty four lakh fifty six thousand seven hundred and eighty nine'
  )
  assertNum(
    34567890,
    'three crore forty five lakh sixty seven thousand eight hundred and ninety'
  )
  assertNum(
    345678901,
    'thirty four crore fifty six lakh seventy eight thousand nine hundred and one'
  )

  assertNum(4, 'four')
  assertNum(45, 'forty five')
  assertNum(456, 'four hundred and fifty six')
  assertNum(4567, 'four thousand five hundred and sixty seven')
  assertNum(45678, 'forty five thousand six hundred and seventy eight')
  assertNum(
    456789,
    'four lakh fifty six thousand seven hundred and eighty nine'
  )
  assertNum(
    4567890,
    'forty five lakh sixty seven thousand eight hundred and ninety'
  )
  assertNum(
    45678901,
    'four crore fifty six lakh seventy eight thousand nine hundred and one'
  )
  assertNum(
    456789012,
    'forty five crore sixty seven lakh eighty nine thousand and twelve'
  )

  assertNum(5, 'five')
  assertNum(56, 'fifty six')
  assertNum(567, 'five hundred and sixty seven')
  assertNum(5678, 'five thousand six hundred and seventy eight')
  assertNum(56789, 'fifty six thousand seven hundred and eighty nine')
  assertNum(567890, 'five lakh sixty seven thousand eight hundred and ninety')
  assertNum(
    5678901,
    'fifty six lakh seventy eight thousand nine hundred and one'
  )
  assertNum(
    56789012,
    'five crore sixty seven lakh eighty nine thousand and twelve'
  )
  assertNum(
    567890123,
    'fifty six crore seventy eight lakh ninety thousand one hundred and twenty three'
  )

  assertNum(6, 'six')
  assertNum(67, 'sixty seven')
  assertNum(678, 'six hundred and seventy eight')
  assertNum(6789, 'six thousand seven hundred and eighty nine')
  assertNum(67890, 'sixty seven thousand eight hundred and ninety')
  assertNum(678901, 'six lakh seventy eight thousand nine hundred and one')
  assertNum(6789012, 'sixty seven lakh eighty nine thousand and twelve')
  assertNum(
    67890123,
    'six crore seventy eight lakh ninety thousand one hundred and twenty three'
  )
  assertNum(
    678901234,
    'sixty seven crore eighty nine lakh one thousand two hundred and thirty four'
  )

  assertNum(7, 'seven')
  assertNum(78, 'seventy eight')
  assertNum(789, 'seven hundred and eighty nine')
  assertNum(7890, 'seven thousand eight hundred and ninety')
  assertNum(78901, 'seventy eight thousand nine hundred and one')
  assertNum(789012, 'seven lakh eighty nine thousand and twelve')
  assertNum(
    7890123,
    'seventy eight lakh ninety thousand one hundred and twenty three'
  )
  assertNum(
    78901234,
    'seven crore eighty nine lakh one thousand two hundred and thirty four'
  )
  assertNum(
    789012345,
    'seventy eight crore ninety lakh twelve thousand three hundred and forty five'
  )

  assertNum(8, 'eight')
  assertNum(89, 'eighty nine')
  assertNum(890, 'eight hundred and ninety')
  assertNum(8901, 'eight thousand nine hundred and one')
  assertNum(89012, 'eighty nine thousand and twelve')
  assertNum(890123, 'eight lakh ninety thousand one hundred and twenty three')
  assertNum(890100, 'eight lakh ninety thousand one hundred')
  assertNum(
    8901234,
    'eighty nine lakh one thousand two hundred and thirty four'
  )
  assertNum(
    89012345,
    'eight crore ninety lakh twelve thousand three hundred and forty five'
  )
  assertNum(
    890123456,
    'eighty nine crore one lakh twenty three thousand four hundred and fifty six'
  )

  assertNum(9, 'nine')
  assertNum(90, 'ninety')
  assertNum(901, 'nine hundred and one')
  assertNum(9012, 'nine thousand and twelve')
  assertNum(90123, 'ninety thousand one hundred and twenty three')
  assertNum(901234, 'nine lakh one thousand two hundred and thirty four')
  assertNum(
    9012345,
    'ninety lakh twelve thousand three hundred and forty five'
  )
  assertNum(
    90123456,
    'nine crore one lakh twenty three thousand four hundred and fifty six'
  )
  assertNum(
    901234567,
    'ninety crore twelve lakh thirty four thousand five hundred and sixty seven'
  )

  assertNum(0, 'zero')
  assertNum('0', 'zero')
  assertNum('012', 'twelve')
  assertNum('0123', 'one hundred and twenty three')
  assertNum('01234', 'one thousand two hundred and thirty four')
  assertNum('012345', 'twelve thousand three hundred and forty five')
  assertNum(
    '0123456',
    'one lakh twenty three thousand four hundred and fifty six'
  )
  assertNum(
    '012345678',
    'one crore twenty three lakh forty five thousand six hundred and seventy eight'
  )

  assertNum(1000000000, 'one arab')
  assertNum(
    1234567890,
    'one arab twenty three crore forty five lakh sixty seven thousand eight hundred and ninety'
  )

  // Add test cases for numbers with 11 digits
  assertNum(10_00_00_00_000, 'ten arab')
  assertNum(
    98_76_54_32_100,
    'ninety eight arab seventy six crore fifty four lakh thirty two thousand one hundred'
  )

  // Add test cases for numbers with 13 digits
  assertNum(10_00_00_00_00_000, 'ten kharab')
  assertNum(
    9876543210987,
    'ninety eight kharab seventy six arab fifty four crore thirty two lakh ten thousand nine hundred and eighty seven'
  )

  assertNum('bad', '')
  assertNum('12x', '')
  assertNum('14.5', '')
  assertNum(1e3, 'one thousand')

  // testing decimal numbers

  t.throws(() => numWords(1e15))

  t.end()
})

// test cases for nepali numbers

test('Should convert numbers to words correctly (nepali) ', (t) => {
  const assertNum = (num, words) => {
    t.equal(numWords(num, 'np'), words)
  }

  assertNum('01', 'एक')
  assertNum('012', 'बाह्र')
  assertNum('0123', 'एक सय तेईस')
  assertNum('012345', 'बाह्र हजार तीन सय पैँतालीस')
  assertNum('012345678', 'एक करोड तेईस लाख पैँतालीस हजार छ सय अठहत्तर')

  assertNum('001', 'एक')
  assertNum('0012', 'बाह्र')
  assertNum('00123', 'एक सय तेईस')
  assertNum('0012345', 'बाह्र हजार तीन सय पैँतालीस')
  assertNum('0012345678', 'एक करोड तेईस लाख पैँतालीस हजार छ सय अठहत्तर')

  assertNum(1, 'एक')
  assertNum(12, 'बाह्र')
  assertNum(123, 'एक सय तेईस')
  assertNum(12345, 'बाह्र हजार तीन सय पैँतालीस')
  assertNum(12345678, 'एक करोड तेईस लाख पैँतालीस हजार छ सय अठहत्तर')
  assertNum(
    123456,
    'एक लाख तेईस हजार चार सय छपन्न'
  )
  assertNum(
    1234567,
    'बाह्र लाख चौँतिस हजार पाँच सय सतसट्ठी'
  )
  assertNum(
    123456789,
    'बाह्र करोड चौँतिस लाख छपन्न हजार सात सय उनान्नब्बे'
  )

  // नेपाली नम्बरहरूका लागि परीक्षा गर्नुहोस्
  assertNum(2, 'दुई')
  assertNum(245, 'दुई सय पैँतालीस')
  assertNum(2345, 'दुई हजार तीन सय पैँतालीस')
  assertNum(2345678, 'तेईस लाख पैँतालीस हजार छ सय अठहत्तर')
  assertNum(
    54333232,
    'पाँच करोड त्रियालीस लाख तेत्तिस हजार दुई सय बत्तिस'
  )
  assertNum(
    234567,
    'दुई लाख चौँतिस हजार पाँच सय सतसट्ठी'
  )
  assertNum(
    2345678,
    'तेईस लाख पैँतालीस हजार छ सय अठहत्तर'
  )
  assertNum(
    23456789,
    'दुई करोड चौँतिस लाख छपन्न हजार सात सय उनान्नब्बे'
  )
  assertNum(
    234567890,
    'तेईस करोड पैँतालीस लाख सतसट्ठी हजार आठ सय नब्बे'
  )

  assertNum(3, 'तीन')
  assertNum(345, 'तीन सय पैँतालीस')
  assertNum(345678, 'तीन लाख पैँतालीस हजार छ सय अठहत्तर')
  assertNum(4333232, 'त्रियालीस लाख तेत्तिस हजार दुई सय बत्तिस')
  assertNum(54333232, 'पाँच करोड त्रियालीस लाख तेत्तिस हजार दुई सय बत्तिस')
  assertNum(
    345678,
    'तीन लाख पैँतालीस हजार छ सय अठहत्तर'
  )
  assertNum(
    3456789,
    'चौँतिस लाख छपन्न हजार सात सय उनान्नब्बे'
  )
  assertNum(
    34567890,
    'तीन करोड पैँतालीस लाख सतसट्ठी हजार आठ सय नब्बे'
  )
  assertNum(
    345678901,
    'चौँतिस करोड छपन्न लाख अठहत्तर हजार नौ सय एक'
  )

  assertNum(4, 'चार')
  assertNum(45, 'पैँतालीस')
  assertNum(456, 'चार सय छपन्न')
  assertNum(4567, 'चार हजार पाँच सय सतसट्ठी')
  assertNum(45678, 'पैँतालीस हजार छ सय अठहत्तर')
  assertNum(
    456789,
    'चार लाख छपन्न हजार सात सय उनान्नब्बे'
  )
  assertNum(
    4567890,
    'पैँतालीस लाख सतसट्ठी हजार आठ सय नब्बे'
  )
  assertNum(
    45678901,
    'चार करोड छपन्न लाख अठहत्तर हजार नौ सय एक'
  )
  assertNum(
    456789012,
    'पैँतालीस करोड सतसट्ठी लाख उनान्नब्बे हजार बाह्र'
  )

  assertNum(5, 'पाँच')
  assertNum(56, 'छपन्न')
  assertNum(567, 'पाँच सय सतसट्ठी')
  assertNum(5678, 'पाँच हजार छ सय अठहत्तर')
  assertNum(56789, 'छपन्न हजार सात सय उनान्नब्बे')
  assertNum(567890, 'पाँच लाख सतसट्ठी हजार आठ सय नब्बे')
  assertNum(
    5678901,
    'छपन्न लाख अठहत्तर हजार नौ सय एक'
  )
  assertNum(
    56789012,
    'पाँच करोड सतसट्ठी लाख उनान्नब्बे हजार बाह्र'
  )
  assertNum(
    567890123,
    'छपन्न करोड अठहत्तर लाख नब्बे हजार एक सय तेईस'
  )

  assertNum(6, 'छ')
  assertNum(67, 'सतसट्ठी')
  assertNum(678, 'छ सय अठहत्तर')
  assertNum(6789, 'छ हजार सात सय उनान्नब्बे')
  assertNum(67890, 'सतसट्ठी हजार आठ सय नब्बे')
  assertNum(678901, 'छ लाख अठहत्तर हजार नौ सय एक')
  assertNum(6789012, 'सतसट्ठी लाख उनान्नब्बे हजार बाह्र')
  assertNum(
    67890123,
    'छ करोड अठहत्तर लाख नब्बे हजार एक सय तेईस'
  )
  assertNum(
    678901234,
    'सतसट्ठी करोड उनान्नब्बे लाख एक हजार दुई सय चौँतिस'
  )

  assertNum(7, 'सात')
  assertNum(78, 'अठहत्तर')
  assertNum(789, 'सात सय उनान्नब्बे')
  assertNum(7890, 'सात हजार आठ सय नब्बे')
  assertNum(78901, 'अठहत्तर हजार नौ सय एक')
  assertNum(789012, 'सात लाख उनान्नब्बे हजार बाह्र')
  assertNum(
    7890123,
    'अठहत्तर लाख नब्बे हजार एक सय तेईस'
  )
  assertNum(
    78901234,
    'सात करोड उनान्नब्बे लाख एक हजार दुई सय चौँतिस'
  )
  assertNum(
    789012345,
    'अठहत्तर करोड नब्बे लाख बाह्र हजार तीन सय पैँतालीस'
  )

  assertNum(8, 'आठ')
  assertNum(89, 'उनान्नब्बे')
  assertNum(890, 'आठ सय नब्बे')
  assertNum(8901, 'आठ हजार नौ सय एक')
  assertNum(89012, 'उनान्नब्बे हजार बाह्र')
  assertNum(890123, 'आठ लाख नब्बे हजार एक सय तेईस')
  assertNum(890100, 'आठ लाख नब्बे हजार एक सय')
  assertNum(
    8901234,
    'उनान्नब्बे लाख एक हजार दुई सय चौँतिस')
  assertNum(
    89012345,
    'आठ करोड नब्बे लाख बाह्र हजार तीन सय पैँतालीस'
  )
  assertNum(
    890123456,
    'उनान्नब्बे करोड एक लाख तेईस हजार चार सय छपन्न'
  )

  assertNum(99, 'उनान्सय')
  assertNum(999, 'नौ सय उनान्सय')
  assertNum(9999, 'नौ हजार नौ सय उनान्सय')
  assertNum(99999, 'उनान्सय हजार नौ सय उनान्सय')
  assertNum(999999, 'नौ लाख उनान्सय हजार नौ सय उनान्सय')
  assertNum(9999999, 'उनान्सय लाख उनान्सय हजार नौ सय उनान्सय')
  assertNum(99999999, 'नौ करोड उनान्सय लाख उनान्सय हजार नौ सय उनान्सय')
  assertNum(999999999, 'उनान्सय करोड उनान्सय लाख उनान्सय हजार नौ सय उनान्सय')
  assertNum(90123, 'नब्बे हजार एक सय तेईस')
  assertNum(901234, 'नौ लाख एक हजार दुई सय चौँतिस')
  assertNum(
    9012345,
    'नब्बे लाख बाह्र हजार तीन सय पैँतालीस'
  )
  assertNum(
    90123456,
    'नौ करोड एक लाख तेईस हजार चार सय छपन्न'
  )
  assertNum(
    901234567,
    'नब्बे करोड बाह्र लाख चौँतिस हजार पाँच सय सतसट्ठी'
  )

  assertNum(
    1_23_45_43_33_232,
    'एक खर्ब तेईस अर्ब पैँतालीस करोड त्रियालीस लाख तेत्तिस हजार दुई सय बत्तिस'
  )

  assertNum(
    12_23_45_43_33_232,
    'बाह्र खर्ब तेईस अर्ब पैँतालीस करोड त्रियालीस लाख तेत्तिस हजार दुई सय बत्तिस'
  )

  assertNum(
    23_45_43_33_232,
    'तेईस अर्ब पैँतालीस करोड त्रियालीस लाख तेत्तिस हजार दुई सय बत्तिस'
  )

  assertNum(
    33_232,
    'तेत्तिस हजार दुई सय बत्तिस'
  )

  assertNum(1e3, 'एक हजार')

  t.throws(() => numWords(1e15))

  t.end()
})
