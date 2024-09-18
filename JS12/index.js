// function getdata(dataId,getnextdata){
//     setTimeout(() =>{
//         console.log('data1',dataId)
        
//         if (getnextdata){
//             getnextdata();
//         }

//     },2000)
    
   
// }

// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3)
//     })
// })




// let promise = new Promise((resolve,reject) =>{
//     console.log('i am a promise');
//     // api giving data 
//     // resolve('solve') 
//     // if not 
//     // reject('some error occured')
    
// })

//backend se api hame promise bhejti h  agar promise full fill ho gya to vo resolve bhejti h nahi to reject
//ham settimeout ko  ek api maan k chal rahe 
// hamne yaha pe promise khud banaya h par in general ham promise khud nahi banate bs unhe use karte h api hamare ko promise bhejti h ham .then and catch ki help se unhe lete h
// promise.then((res) =>{
//     ...
// })
// promise.catch((err)=>{...}) 

// function getdata(dataId,getnextdata){
//     return new Promise((resolve,reject) =>{
//         // let this is an api 
//         setTimeout(() =>{
//             console.log('data1',dataId)
//             // if get the data 
//             resolve('success')
//             //if not
//             // reject('error')
            
//             if (getnextdata){
//                 getnextdata();
//             }
    
//         },2000)
//     })
    
// }

//asyncronus funtion which return the promise
// const getPromise = () =>{
//     return new((resolve,reject) =>{
//         console.log('iam promise')
//         resolve('success')
//     })
// }

// let promise = getPromise();
// promise.then(() =>{
//     console.log('fullfiled')
// })

// //promise chaning

// // getPromise().then((res) =>{}).then((res) =>{}).then((res) =>{})

// //async funciton
// async function hello(){
//     console.log('ello')
// }

// // await can only be use inside the another async function 
// async function gethello(){
//     await hello();
//     await hello()
// }
// // in async await we have to call the function
// gethello();
// // if we dont want to call gethello

// ( async function () {
//     await hello();
//     await hello()
// })();
const URL = ""
// let promise = fetch(URL)
// console.log(promise)

const getfacts = async () => {
    // getting data 
    let response = await fetch(URL) 
    // response  in json format

    let data =  await response.json() //json() use to convert in object format
    console.log(data[0].title) //javascript format

}
getfacts()