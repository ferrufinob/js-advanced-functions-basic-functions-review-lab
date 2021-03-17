// Function Declaration - Regular Function
// loads before any code is executed.
function saturdayFun(string = "roller-skate") {
  return `This Saturday, I want to ${string}!`;
}

// Function Expression - anonymous function inside of a variable.
// loads only when the interpreter reaches that line of code.
let mondayWork = function (string = "go to the office") {
  return `This Monday, I will ${string}.`;
};

function wrapAdjective(arg = "*") {
  return function (string = "special") {
    return `You are ${arg}${string}${arg}!`;
  };
}

const Calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
};

function actionApplyer(integer, arr) {
  if (arr === []) {
    return integer;
  } else {
    return arr.reduce(function (int, func) {
      return func(int);
    }, integer);
  }
}
