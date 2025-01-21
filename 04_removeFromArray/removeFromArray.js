const removeFromArray = function(array, ...toRemove) {
    let newArray = array;
    //arguments.length;
    for (const item of toRemove) {
        newArray = newArray.filter((current) => current !== item);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
