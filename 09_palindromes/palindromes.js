const palindromes = function (string) {
    const onlyLettersNumbers = string.replaceAll(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    const reverseString = onlyLettersNumbers.split('').reverse().join('');

    return onlyLettersNumbers === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
