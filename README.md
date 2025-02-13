# Amount to words (en/np)

A package for converting numbers to words (up to 13 digits), It supports both English and Nepali language. (new feature)

# Features

- Convert numbers to words
- Supports both English and Nepali language
- Supports upto 13 digits
- No dependencies



# Terms for contribution

- Please make sure to update tests as appropriate.
- Please make sure to update the README.md file with details of changes to the interface.


# Install

```js
npm i amount-to-words-en-np
```

# Example

```js
1            ->  one
12           ->  twelve
123          ->  one hundred and twenty three
1234         ->  one thousand two hundred and thirty four
12345        ->  twelve thousand three hundred and forty five
123456       ->  one lakh twenty three thousand four hundred and fifty six
1234567      ->  twelve lakh thirty four thousand five hundred and sixty seven
12345678     ->  one crore twenty three lakh forty five thousand six hundred and seventy eight
12345678912  ->  ten arab thirty four crore fifty six lakh seventy eight thousand nine hundren and twelve
```

```js
1          ->  एक
12         ->  बाह्र
123        ->  एक सय तेईस
1234       ->  एक हजार तीन सय चौँतीस
12345      ->  बाह्र हजार तीन सय चौँतीस
123456     ->  एक लाख तेईस हजार चार सय छपन्न
1234567    ->  बाह्र लाख चौँतीस हजार पाँच सय सत्ताईस
12345678   ->  एक करोड तेईस लाख चौँतीस हजार छपन्न सय अठत्तर
123456789  ->  बाह्र करोड चौँतीस लाख पैन्तीस हजार सात सय उनन्नब्बे
1234567891 ->  एक अर्ब तेईस करोड चौँतीस लाख उनन्नब्बे हजार आठ सय एक


```

# Usage

```js
const numWords = require('amount-to-words-en-np')

const amountInWords = numWords(12345) // twelve thousand three hundred and forty five

const amountInWordsNepali = numWords(12345, 'np') // बाह्र हजार तीन सय चौँतीस
```

_Note: This module supports upto 13 numbers

# Support for nepali language is added

```js

# Contributing

In case you notice a bug, please open an issue mentioning the input that has caused an incorrect conversion.

For nepali language, you can add more test cases in test.js file.
