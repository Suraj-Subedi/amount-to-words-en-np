# Amount to words (en/np)

A package for converting numbers to words (up to 13 digits), support for nepali language is comming soon ...


# Terms for contribution

- Please make sure to update tests as appropriate.
- Please make sure to update the README.md file with details of changes to the interface.


# Install

```js
npm i num-words
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

# Usage

```js
const numWords = require('num-words')

const amountInWords = numWords(12345) // twelve thousand three hundred and forty five
```

_Note: This module supports upto 13 numbers

# Support for nepali language is comming soon ...

# Contributing

In case you notice a bug, please open an issue mentioning the input that has caused an incorrect conversion.
