let heroes = ['thor','hulk','spiderman','saktiman']
// for(let i of heroes){
//     console.log(i)
// }
// let zeroes = ['thor','hulk','spiderman','saktiman']
// for(let i of zeroes){
//     console.log(i.toUpperCase())
// }
let zeroes = ['thor','hulk','spiderman','saktiman']
// add at the end
zeroes.push('peacemaker','deadpool')
console.log(zeroes)
//remove from the end
// zeroes.pop()
// console.log(zeroes)
// let deletedvalue = zeroes.pop()
// console.log(deletedvalue)
// console.log(zeroes.toString())

// concat = to join multiple arrays or string
let nothing =  zeroes.concat(heroes)
// console.log(nothing)
//add to start
// nothing.unshift('captain america')
// console.log(nothing)
//delete from the start and return
// deleteitem = nothing.shift()
// console.log(deleteitem)

//return the piece of array slice(startindex,endindex)
console.log(nothing.slice(2,5))
//change original array
nothing.splice(2,1,'superman')
console.log(nothing)