const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const errorPromp = document.querySelector(".error");
const listHolder = document.querySelector(".listHolder");
// listen for klick on addBtn
addBtn.addEventListener("click", ()=>{
    console.log("addBtn is clicked")
    createList();
});





//Function for adding new list
function createList(){
    //create div element inside li element called ListHolder
    const listItem = document.createElement("div");
    listItem.className = "listItem";
    listHolder.appendChild(listItem);
    //create p elemetn inside newly created div element called listItem
    const text = document.createElement("p");
    text.textContent = input.value;
    listItem.appendChild(text);
    //create a delete button inside the newly created dv called listItem
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "fa-regular fa-trash-can fa-sm";
    listItem.appendChild(deleteBtn);

};
