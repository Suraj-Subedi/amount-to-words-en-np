const {test} = require("tap");

const numWords = require(".");

// only('test playground', (t) => {
//   t.end()
// })

test("Should convert numbers to words correctly", (t) => {
  const assertNum = (num, words) => {
    t.equal(numWords(num, "en", true), words);
  };

  assertNum(1.1, "one and ten");
  assertNum(12.2, "twelve and twenty");

  //   t.throws(() => numWords(1e15))

  t.end();
});
