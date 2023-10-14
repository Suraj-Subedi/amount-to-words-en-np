/* eslint-disable eqeqeq */
const {ones, tens, npOnes} = require("./constants");

const regex = /^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/;

const getOneDigitValue = (n) => ones[Number(n)];
const getTwoDigitValue = (n) => tens[n[0]] + " " + ones[n[1]];

const getNepaliDigitValue = (n) => npOnes[Number(n)];
module.exports = function numWords(
  input,
  language = "en",
  decimal = false,
  isAmount = false,
  currency,
  smallCurrency
) {
  let num = Number(input);
  let decimalNum = 0;
  if (decimal) {
    decimalNum = +num.toString().split(".")[1];
  }
  num = Math.floor(num);

  console.log(num);
  if (isNaN(num)) return "";
  if (num === 0) return "zero";

  const numStr = num.toString();
  if (numStr.length > 13) {
    throw new Error("overflow"); // Does not support converting more than 9 digits yet
  }

  const matchResult = ("0000000000000" + numStr).substr(-13).match(regex); // left pad zeros
  if (!matchResult) {
    // Handle the case when the match is null (no digits found)
    return "";
  }

  switch (language) {
    case "en":
      return getEnglishNumber(matchResult, decimal, decimalNum);
    case "np":
      return getNepaliNumber(matchResult);
  }
};

function convertPaisaToWords(paisa, language) {
  let words = "";
  let paisaStr = paisa.toString().slice(0, 1);

  if (paisaStr === "00") return words;

  if (paisaStr.length === 1) {
    paisaStr = paisaStr + "0";
  }

  switch (language) {
    case "en":
      if (paisaStr.length === 1) {
        words = ones[parseInt(paisaStr)];
      } else if (paisaStr.length === 2) {
        if (paisaStr.charAt(0) === "1") {
          words = ones[parseInt(paisaStr)];
        } else {
          words =
            tens[parseInt(paisaStr.charAt(0))] +
            " " +
            ones[parseInt(paisaStr.charAt(1))];
        }
      }

      return words;

    default:
      return "";
  }
}

const getNepaliNumber = (matchResult) => {
  const [, n7, n6, n5, n4, n3, n2, n1] = matchResult;
  let str = "";
  str += n7 != 0 ? getNepaliDigitValue(n7) + "खर्ब " : "";
  str += n6 != 0 ? getNepaliDigitValue(n6) + "अर्ब " : "";
  str += n5 != 0 ? getNepaliDigitValue(n5) + "करोड " : "";
  str += n4 != 0 ? getNepaliDigitValue(n4) + "लाख " : "";
  str += n3 != 0 ? getNepaliDigitValue(n3) + "हजार " : "";
  str += n2 != 0 ? getNepaliDigitValue(n2) + "सय " : "";
  str += n1 != 0 ? getNepaliDigitValue(n1) : "";

  return str.trim();
};

const getEnglishNumber = (
  matchResult,
  decimal,
  decimalAmount = 0,
  isAmount,
  currency,
  smallCurrency
) => {
  const [, n7, n6, n5, n4, n3, n2, n1] = matchResult;
  let str = "";
  str +=
    n7 != 0 ? (getOneDigitValue(n7) || getTwoDigitValue(n7)) + "kharab " : "";
  str +=
    n6 != 0 ? (getOneDigitValue(n6) || getTwoDigitValue(n6)) + "arab " : "";
  str +=
    n5 != 0 ? (getOneDigitValue(n5) || getTwoDigitValue(n5)) + "crore " : "";
  str +=
    n4 != 0 ? (getOneDigitValue(n4) || getTwoDigitValue(n4)) + "lakh " : "";
  str +=
    n3 != 0 ? (getOneDigitValue(n3) || getTwoDigitValue(n3)) + "thousand " : "";
  str += n2 != 0 ? getOneDigitValue(n2) + "hundred " : "";
  str += n1 != 0 && str != "" && !decimal ? "and " : "";
  str += n1 != 0 ? getOneDigitValue(n1) || getTwoDigitValue(n1) : "";

  // if decimal is true code below will run
  if (decimal) {
    // if decimal is true and isAmount is true code below will run
    if (isAmount) {
      // if decimal is true and isAmount is true and currency is true code below will run
      if (currency) {
        str += " " + currency;
      } else {
        str += " rupees";
      }
      str += convertPaisaToWords(decimalAmount, "en");

      // if decimal is true and isAmount is true and smallCurrency is true code below will run
      if (smallCurrency) {
        str += " " + smallCurrency;
      } else {
        str += " paisa";
      }
    } else {
      // if decimal is true and isAmount is false code below will run
      str += "and ";
      str += convertPaisaToWords(decimalAmount, "en");
    }
  } else {
    // if decimal is false code below will run
    if (isAmount) {
      // if decimal is false and isAmount is true code below will run
      if (currency) {
        // if decimal is false and isAmount is true and currency is true code below will run
        str += " " + currency;
      } else {
        // if decimal is false and isAmount is true and currency is false code below will run
        str += " rupees";
      }
    }
  }

  return str.trim();
};
