const reverseString = function(string) {
    const stringArray = string.split('');
    const reversedString = stringArray.reverse('');
    return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
