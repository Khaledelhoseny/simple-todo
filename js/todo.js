const arrayOfObjects = [
    {
        taskName: "report",
        completed: true,
        id:1 
    

    },
    {
        taskName: "coding",
        completed: true,
        id:2 


    },
    {
        taskName: "js",
        completed: true,
        id:3 


    }
    ,
    {
        taskName: "react",
        completed: false,
        id:4

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
        arrayOfObjects.push({ taskName: inputValue, completed: false , id : arrayOfObjects.length+1 })
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
        `<li class="todo" data-id=${i+1} >
        <div class="stack-small">
            <div class="c-cb"><input type="checkbox"><label class="todo-label">${arrayOfObjects[i].taskName}</label></div>
            <div class="btn-group">
                <button type="button" onclick="editFunc(event)" class="btn">Edit <span class="visually-hidden">Task#1</span></button>
                <button type="button" onclick="deleteFunc(event)" class="btn btn__danger">Delete <span class="visually-hidden">Task#1</span></button>
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

function deleteFunc(e){
    // getting li elemnt
    const liElement = e.target.parentElement.parentElement.parentElement
    // removing li element
    liElement.remove()
    // getting li dataset id 
    const dataId = liElement.dataset.id

    for (let i = 0; i < arrayOfObjects.length; i++) {
        if(dataId==arrayOfObjects[i].id){
            arrayOfObjects.splice(arrayOfObjects.indexOf(arrayOfObjects[i]),1)
        }
    }
    listHeading.innerHTML = `${arrayOfObjects.length} tasks remains`
}




// edit feature :
function editFunc(e){
    const liElement = e.target.parentElement.parentElement.parentElement   
    console.log(liElement) 
    let label = document.querySelector(`[data-id='${liElement.dataset.id}'] label `)
    console.log(label)
    label.innerHTML = `<input id="editInput" onblur="myFunction()" type="text" value="${label.innerText}" >`
    var x = document.getElementById("editInput");
    // x.value =    
}

function myFunction(){
    let x = document.getElementById("editInput");
    let parg = document.createElement("p") 
    if(x.value!==''){
        parg.innerText = x.value
        x.innerHTML = parg.innerHTML
        // x.parentNode.replaceChild(parg,x)
    }
}


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
