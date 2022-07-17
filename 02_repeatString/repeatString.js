const repeatString = function (string, num) {
  if (typeof string == "string" && typeof num == "number") {
    if (num < 0) {
      return "ERROR";
    } else {
      return string.repeat(num);
    }
  }
};

// Do not edit below this line
module.exports = repeatString;
