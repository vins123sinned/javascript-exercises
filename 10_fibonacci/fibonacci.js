const fibonacci = function(member) {
    if (typeof member === 'string') member = parseInt(member);
    if (member === 0) {
        return 0;
    } else if (member < 0) {
        return 'OOPS';
    } 

    let currentFibonacci = 1;
    /* Since we start the sequence at 1 (The second member), 
       we set our two previous elements accordingly */
    // These two variables will be used to find the next fibonacci sequence
    let previousNumberOne = 0;
    let previousNumberTwo = currentFibonacci;

    for (let i = 1; i < member; i++) {
        currentFibonacci = previousNumberOne + previousNumberTwo;
        // previousNumberOne moves on to the next sequence value as does previousNumberTwo
        previousNumberOne = previousNumberTwo;
        previousNumberTwo = currentFibonacci;
    }

    return currentFibonacci;
};

// Do not edit below this line
module.exports = fibonacci;
