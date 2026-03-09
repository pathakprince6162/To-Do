const button = document.getElementById("add-todo").addEventListener("click",addTodo);
const inputText = document.getElementById("todo-input");

document.querySelector("ul").addEventListener("click",removeTodo)

document.getElementById("completedUlist").addEventListener("click",undoTodo);

function addTodo(e){
    const ullist = document.querySelector("ul")
    const lilist = document.createElement("li");
    
    const removebtn = document.createElement("button")
    removebtn.classList.add("removebtn")
    removebtn.textContent = "X"

    lilist.textContent = inputText.value ;

    lilist.appendChild(removebtn);
    ullist.appendChild(lilist);

    inputText.value = ""
    inputText.focus();
}
function removeTodo(e){
    console.log("parent element " , e.target.tagName)
    if (e.target.tagName == "BUTTON") {
        const completeUllist = document.getElementById("completedUlist")
        const completeLi = document.createElement("li");
         const liChild = e.target.parentNode
        e.target.textContent = "undo"
        completeUllist.appendChild(liChild);
    }
}
function undoTodo(e){
        console.log("parent element", e.target.tagName)
        if (e.target.tagName == "BUTTON") {
                const ullist = document.querySelector("ul")
             e.target.textContent = "X"
            ullist.appendChild(e.target.parentNode)

            
        }
}