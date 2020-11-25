/* eslint-disable no-unused-vars */
const calculate = (calculator, btn) => {
  let { total, next, operation } = calculator;

  if (btn === '%') {
    if (next) {
      next /= 100;
    } else {
      total /= 100;
    }
  }

  if (btn === '+/-') {
    if (next) {
      next *= -1;
    }
  }
};

export default calculate;
