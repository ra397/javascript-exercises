const fibonacci = function(member) {
    if (member < 0) {
        return "OOPS"
    }
    let array = [1, 1];
    if (member === 1 || member === 2) {
        return 1;
    }
    for (let i = 0; i < member - 1; i++) {
        array.push(array[i] + array[i + 1])
    }
    array.pop();
    return array.pop();
};

// Do not edit below this line
module.exports = fibonacci;
