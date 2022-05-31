const removeFromArray = function(array, ...nums) {
    parameters = []
    for (let num of nums) {
       parameters.push(num);
    }
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < parameters.length; j++) {
        if (array[i] === parameters[j]) {
          array.splice(i, 1);
          i --;
        }
      }
    }
    return array;
  };

// Do not edit below this line
module.exports = removeFromArray;
