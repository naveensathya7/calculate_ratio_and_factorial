const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");
function ratioAndFactorial(num1, num2, num3) {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num3);
  return { ratio, factorial };
}
console.log(ratioAndFactorial(10, 20, 5));
module.exports = ratioAndFactorial;
