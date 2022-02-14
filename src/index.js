var numbers = [1, 2, 3, 4, 5];
//Map used to Iterate over the Array and Apply Some Operations
var array = numbers.map(function (num) {
    return num * 2;
});
console.log(array);
//Filter used to filter array which satisfy the specified conditions
array = numbers.filter(function (num) {
    return num % 2 == 0;
});
console.log(array);
//Reduce used to Accumulate some values it may be add or mul
array = numbers.reduce(function (sum, num) {
    return sum + num;
});
console.log(array);
//Find used to find first Number that Matches the Conditions
array = numbers.find(function (num) {
    return num > 2;
});
console.log(array);
