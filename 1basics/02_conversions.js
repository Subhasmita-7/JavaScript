console.log("Number Conversions:")
let s ="subu"
let n = Number(s)
console.log(typeof n)
console.log(n)

let t = true          
let nu = Number(t)
console.log(typeof nu)
console.log(nu)                 //1 for true and 0 for false

console.log("\nBoolean Conversions:")
let b ="subu"
let bo = Boolean(b)
console.log(typeof bo)
console.log(bo)

console.log("\nString Conversions:")

let st ="subu"
let str = String(s)
console.log(typeof str)
console.log(str)

console.log(" ")
console.log("1"+2+2)
console.log(2+1+"1")
console.log(+true)

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"
//postfix x++, the increment operator increments and returns the value before incrementing.

let p = 3;
const q = ++p;

console.log(`a:${p}, b:${q}`);
// Expected output: "a:4, b:4"
//prefix ++x, the increment operator increments and returns the value after incrementing.
console.log("")
console.log("2">5)
console.log("2">"1")
console.log(2>"5")
console.log(3>2)

console.log("\ncomparision operators:")  //null is taken as 0 for comparision operators but not for assignment operators
console.log(null>0)
console.log(null==0) //false
console.log(null<=0)
console.log("\n===")
console.log("2"===2) // === checks the datatype
console.log(2===2)