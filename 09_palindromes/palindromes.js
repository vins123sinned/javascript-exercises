const palindromes = function (string) {
    const onlyLetters = string.replaceAll(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    const reverseString = onlyLetters.split('').reverse().join('');

    return onlyLetters === reverseString ? true: false;
};

// Do not edit below this line
module.exports = palindromes;
