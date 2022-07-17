const removeFromArray = function(...arg) {
   const array = arg[0]
   return array.filter(i => !arg.includes(i))
};

// Do not edit below this line
module.exports = removeFromArray;
