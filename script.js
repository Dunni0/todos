const form = document.getElementById("form");
const input = document.getElementById("input");

const todos = document.getElementById("todos");
const addBtn = document.getElementById("addBtn");

const toDos = JSON.parse(localStorage.getItem("todos"));

if (toDos){
     toDos.forEach(todo =>{
        addTodo(todo);  
     })
}

const submit = form.addEventListener("submit", function(e){
    e.preventDefault();
    addTodo();
});

function addTodo(todo){
    let todoText = input.value;

   if(todo){
          todoText = todo.text
   }

    if (todoText){
        const todoEl = document.createElement("li");

        if(todo && todo.complete){
            todoEl.classList.add("complete");
        }
       
    //to display 
        
        todoEl.innerText = todoText

    // to cross-out a completed task
        todoEl.addEventListener("click",function(){
            todoEl.classList.toggle("complete")
            addToLS();
        })
        

        todos.appendChild(todoEl);    

    // delete todo list 
    
       todoEl.addEventListener("contextmenu", function(e){
            e.preventDefault();
            todoEl.remove();
            addToLS();
       })

    // empty the input
    
        input.value= "";
       
        addToLS();
        
    }
};

addBtn.addEventListener("click", function(){
    submit;
})

    // add to local storage
    
function addToLS(){
    const todosEl = document.querySelectorAll("li");
    const todos= [];

    todosEl.forEach((todoEl) => {
        todos.push({
        text: todoEl.innerText,
        complete: todoEl.classList.contains("complete")         
        }); 
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}
