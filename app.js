const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const errorText = document.querySelector(".errorOff");
const listHolder = document.querySelector(".listHolder");
// listen to addBtn for any click.
addBtn.addEventListener("click", ()=>{
    //if the input is empty call the errorPromp to be on. else call the create list functon.
    if (input.value !== ""){
        //call error function with a parameter to switch of if its on already.
        errorPromp("Off");
        //create new list with input from user.
        createList();
        //call the function to clear the input.
        clearInput();
    } else {
        //calling the error function with a condition to be on.
        errorPromp("On");
        // console.log("input is empty!");
    }
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
    //Delete items from the list
    deleteBtn.addEventListener("click", ()=>{
        listHolder.removeChild(listItem);
    });
    //mark is done in the list.
    text.addEventListener("click", ()=>{
        text.classList.toggle("markAsDone");
    });

};

//function for error promp when input is empty, this functon is goin to switch the class name of p element depending on condition.
function errorPromp(status){
    if (status === "On"){
        // console.log("error turned On")
        errorText.classList.add("errorOn");
        errorText.classList.remove("errorOff");
    } else if (status === "Off"){
        // console.log("error turned off")
        errorText.classList.add("errorOff");
        errorText.classList.remove("errorOn");
    };
};

//function to clear the input
function clearInput(){
    input.value = "";
};

//function to delete item from the list


