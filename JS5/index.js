// function sum(a,b){
//     return a+b
// }
// console.log(sum(2,3))

//Arrow function

//const functionName = (parm1,parm2) =>{
    // }
// const sum = (a,b)=>{
//     return a+b
// }
// console.log(sum(1,2))
// const sum = (a,b)=>a+b
// console.log(sum(1,2))


// forEach funciton 
// Array.forEach(callBackFunction)
//callback is another function which passed as an argument in another function
// let arr = [1,2,3,4,5,6]
// arr.forEach(function print(val){
//     console.log(val)
// })
// arr = ['name','age','date']
// arr.forEach((val) =>{
//     console.log(val.toUpperCase())
// })
// forEach be only used for array not string 
//method are the function which are only use with specific type of value
//forEach is a method
// arr = ['name','age','date']
// arr.forEach((val,idx,arr) =>{
//     console.log(val.toUpperCase(),idx,arr)
// })

// higher order function are the functions are the function which take a fuction as a parameter or return the function
// we can use three type of parameter like value index and array


//another way to write callback functions

let nums = [67,53,99]
// let calcSquare = (num) => {
//     console.log(num*num);
// }
// nums.forEach(calcSquare)

//MAP METHOD = it is also similar to forEach method the only defrenc is the value its call back retrun is used to form new array
// parameter = value index array 
// let doublenum = nums.map((val) => {
//     return val *2
// })
// console.log(doublenum)
//FILTER METHOD = USE TO FILTER OUT THE VALUE

// let evennum = nums.filter((val) => {
//     return val%3 === 0;
// });
// console.log(evennum)
 // Reduce method

const ini = nums.reduce((result,val) =>{
    return result+val
})
console.log(ini)
