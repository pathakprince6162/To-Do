document.getElementById("add-btn").addEventListener("click",addTodo);

document.querySelector("ul").addEventListener("click",removeTodo)
function addTodo(e){
     const tcon = document.getElementById("todo-input");
     
     const liCon = document.createElement("li")
    liCon.textContent = tcon.value ;

    const ulCon = document.getElementById("parent-list")
        const deletebtn = document.createElement("button")
        deletebtn.textContent = "Delete"

        liCon.appendChild(deletebtn)
        ulCon.appendChild(liCon)

        tcon.value = ""
        tcon.focus();


}

function removeTodo(e){
    e.target.parentNode.remove()
}