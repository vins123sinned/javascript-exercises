const palindromes = function (string) {
    const onlyLetters = string.replaceAll(/[^a-zA-Z0-9]+/g, '');
    const reverseString = onlyLetters.toLowerCase().split('').reverse().join('');

    return onlyLetters.toLowerCase() === reverseString ? true: false;
};

// Do not edit below this line
module.exports = palindromes;
