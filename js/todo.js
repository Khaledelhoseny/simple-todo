const arrayOfObjects = [
    // {
    //     taskName: "report",
    //     completed: true,

    // },
    // {
    //     taskName: "coding",
    //     completed: true,

    // },
    // {
    //     taskName: "js",
    //     completed: true,

    // }

]

// Globals
const listHeading = document.querySelector("#list-heading")
const labels = document.querySelectorAll(".todo-label")
const todoList = document.querySelector(".todo-list")
const cheackBox = document.querySelector("ul input")
const addButton = document.querySelector(".btn__primary")
//.............................................................

// addButton.addEventListener("click", addTodo)
// function addTodo(e) {
//     e.preventDefault()
//     let inputValue = document.querySelector("#new-todo-input").value
//     if (inputValue !== '') {
//         arrayOfObjects.push({ taskName: inputValue, completed: false })
//         const li = document.createElement("li")
//         li.innerHTML =
//             `<li class="todo">
//             <div class="stack-small">
//                 <div class="c-cb"><input type="checkbox"><label class="todo-label">${inputValue}</label></div>
//                 <div class="btn-group"><button type="button" class="btn">Edit <span
//                         class="visually-hidden">Task#1</span></button><button type="button"
//                         class="btn btn__danger">Delete <span class="visually-hidden">Task#1</span></button>
//                 </div>
//             </div>
//             </li>`

//         todoList.appendChild(li)
//         listHeading.innerHTML = `${arrayOfObjects.length} tasks remains`
//         checkState()
//         inputValue=''
//     }


// }



addButton.addEventListener("click", addTodo)
function addTodo(e) {
    e.preventDefault()
    let inputValue = document.querySelector("#new-todo-input").value
    if (inputValue !== '') {
        arrayOfObjects.push({ taskName: inputValue, completed: false })
        viewInformation(arrayOfObjects)
        document.querySelector("#new-todo-input").value=''
    }


}

function viewInformation(arrayOfObjects) {
    listHeading.innerHTML = `${arrayOfObjects.length} tasks remains`

    for (let i = 0; i < arrayOfObjects.length; i++) {


        // labels[i].innerHTML = arrayOfObjects[i].taskName
        const li = document.createElement("li")
        li.innerHTML =
            `<li class="todo">
        <div class="stack-small">
            <div class="c-cb"><input type="checkbox"><label class="todo-label">${arrayOfObjects[i].taskName}</label></div>
            <div class="btn-group"><button type="button" class="btn">Edit <span
                    class="visually-hidden">Task#1</span></button><button type="button"
                    class="btn btn__danger">Delete <span class="visually-hidden">Task#1</span></button>
            </div>
        </div>
        </li>`

        
        todoList.appendChild(li)


    }

    checkState()

}



// viewInformation(arrayOfObjects)



function checkState() {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        if (arrayOfObjects[i].completed === true) {
            document.querySelectorAll("ul input")[i].checked = true
        }
    }

}