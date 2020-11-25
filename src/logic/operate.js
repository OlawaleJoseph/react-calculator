import Big from 'big.js';

export default (num1, num2, operator) => {
  const firstNum = new Big(num1);
  const secondNum = num2 && new Big(num2);

  switch (operator) {
    case '/':
      return firstNum.div(secondNum);
    case '*':
      return firstNum.mul(secondNum);
    case '+':
      return firstNum.add(secondNum);
    case 'X²':
      return firstNum.pow(2);
    default:
      return firstNum.sub(secondNum);
  }
};
