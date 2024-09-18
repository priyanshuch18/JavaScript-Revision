let btn1 = document.querySelector("#btn1")
// btn1.onclick = (e)=>{
//     console.log(e.target)
//     console.log(e.type)
//     alert("button was clicked")
// }
btn1.addEventListener("click",(e) =>{
    console.log("button was clicked")
    document.querySelector('body').classList.toggle("dark")
    console.log(e)
})
