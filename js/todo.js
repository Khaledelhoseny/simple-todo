const arrayOfObjects = [
    {
        taskName: "report",
        completed: true,

    },
    {
        taskName: "coding",
        completed: true,

    },
    {
        taskName: "js",
        completed: true,

    }
    ,
    {
        taskName: "react",
        completed: false,

    }

]

// Globals
const listHeading = document.querySelector("#list-heading")
const labels = document.querySelectorAll(".todo-label")
const todoList = document.querySelector(".todo-list")
const cheackBox = document.querySelector("ul input")
const addButton = document.querySelector(".btn__primary")
//.............................................................



// add a task feature
addButton.addEventListener("click", addTodo)
function addTodo(e) {
    e.preventDefault()
    const box = document.querySelector("#new-todo-input")
    let inputValue = box.value
    if (inputValue !== '') {
        arrayOfObjects.push({ taskName: inputValue, completed: false })
        viewInformation(arrayOfObjects)
        box.value=''
    }


}

// view feature : 
function viewInformation(arrayOfObjects) {
    listHeading.innerHTML = `${arrayOfObjects.length} tasks remains`
    const li = document.createElement("li")

    for (let i = 0; i < arrayOfObjects.length; i++) {
        li.innerHTML +=
        `<li class="todo">
        <div class="stack-small">
            <div class="c-cb"><input type="checkbox"><label class="todo-label">${arrayOfObjects[i].taskName}</label></div>
            <div class="btn-group">
                <button type="button" class="btn">Edit <span class="visually-hidden">Task#1</span></button>
                <button type="button" class="btn btn__danger">Delete <span class="visually-hidden">Task#1</span></button>
            </div>
        </div>
        </li>
        
        `

    }
    todoList.innerHTML=li.innerHTML
    checkState()
    

}

viewInformation(arrayOfObjects)

// checkstate feature 
function checkState() {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        if (arrayOfObjects[i].completed === true) {
            document.querySelectorAll("ul input")[i].checked = true
        }
    }

}


//Delete feature : 
let deleteButtons = document.querySelectorAll(".btn__danger")
deleteButtons.forEach(function(button){
    button.addEventListener('click',deleteFunc)
    
    function deleteFunc(e){
        let element = e.target.parentElement.parentElement.parentElement
        console.log(element)
        element.remove()


        let labelText = element.children[0].children[0].children[1].innerText
        console.log(labelText)

        for (let i = 0; i < arrayOfObjects.length; i++) {
            if(labelText==arrayOfObjects[i].taskName){
                arrayOfObjects.splice(arrayOfObjects.indexOf(arrayOfObjects[i]),1)
            }
        }
        
        listHeading.innerHTML = `${arrayOfObjects.length} tasks remains`

    }
})







// filter feature : 
// const lis = document.querySelectorAll(".todo-list li")
// const filterButtons = document.querySelectorAll(".filters button")
// filterButtons.forEach(function(button){
//     button.addEventListener("click",filterTasks)
// })


// function filterTasks(e){
//     e.preventDefault
//     if(e.target.dataset.filter==='all'){
//         for (let i = 0; i < arrayOfObjects.length; i++) {
//             if(document.querySelectorAll("ul input")[i].checked == true){
//                 lis.forEach(function(li){ li.style.display="none"})
//             }
            
            
//         }
//     }    
// }
