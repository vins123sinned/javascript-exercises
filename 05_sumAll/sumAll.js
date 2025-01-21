const sumAll = function(firstInput, secondInput) {
    if (firstInput < 0 || secondInput < 0 ||
      typeof(firstInput) !== 'number' || 
      typeof(secondInput) !== 'number' ||
      Number.isInteger(firstInput) !== true ||
      Number.isInteger(secondInput) !== true) {
        return 'ERROR';
    }

    let firstNumber;
    let secondNumber;
    let sum = 0;
    
    if (firstInput < secondInput) {
        firstNumber = firstInput;
        secondNumber = secondInput;
    } else {
        firstNumber = secondInput;
        secondNumber = firstInput;
    }

    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
