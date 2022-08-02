//variable
const input = document.querySelector("form .todo-input");
const button = document.querySelector("form .todo-button");
const menuList = document.querySelector(".todo-container .todo-list");

//send method
button.addEventListener("click", addButton);
menuList.addEventListener("click", deleteCheck);


//method
function addButton(event) {
    //gift preventDefault for wiping out type submit
    event.preventDefault();

    //create todo Div
    const divMenu = document.createElement('div');
    divMenu.classList.add('todo');

    // create li
    const liMenu = document.createElement('li');
    liMenu.innerText = input.value;
    liMenu.classList.add('item-menu');
    divMenu.appendChild(liMenu);

    //create check
    const checkMenu = document.createElement('button');
    checkMenu.innerHTML = '<i class="fas fa-check"></i>';
    checkMenu.classList.add('complete');
    divMenu.appendChild(checkMenu);

    //create delete
    const deleteMenu = document.createElement('button');
    deleteMenu.innerHTML = '<i class="fas fa-trash"></i>';
    deleteMenu.classList.add('delete');
    divMenu.appendChild(deleteMenu);


    menuList.appendChild(divMenu);
    input.value = '';
}

function deleteCheck(e) {
    const item = e.target;

    //event delete
    if (item.classList[0] === "delete") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        //after event transition
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
    }

    //event complete
    if (item.classList[0] === "complete") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}