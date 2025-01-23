let a = 17
var b 
const c = 5

a=1
//b=2  when you dont assign a value, you will get undefined

//c=3  you cannot re-assign to a const variable 

// using var is not preferred that much because whenever you create any file with the same variable name then the value will be 
// changed in every file where the same variable name exists.

// Use let and avoid using any name without variable
console.log("a,b,c: ",a,b,c)
b=2
console.table([a,b,c])





// DATA TYPES
//number => 2 to power 53
//string => ""
//boolean => true/false
//null => standalone value
//undefined =>
//symbol => unique
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof b)