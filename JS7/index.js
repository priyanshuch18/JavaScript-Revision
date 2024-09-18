let newButton = document.createElement("button")
newButton.innerText = 'click me'
let div = document.querySelector("div")
div.append(newButton) //inside the div at the end
div.prepend(newButton)//inside the div in the begining
div.before(newButton)//outside the div in the begining
div.after(newButton)//outside the div at the end
newButton.remove()//remove the button
div.classList.add("newClass")
div.classList.remove("newClass")