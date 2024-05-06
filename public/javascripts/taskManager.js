const inputBox = document.getElementById('inputBox')
const list = document.getElementById('list')

const colors = ['pink', 'green', 'blue', 'yellow']

// localStorage.removeItem("data")

function Task(text, color) {
    this.text = text
    this.color = color
}



// **FUNCTIONS**

function addTask(){
    let tasks = [];
    if(localStorage.data != undefined){
        tasks = JSON.parse(localStorage.data)
    } 

    tasks.push(new Task(inputBox.value.toUpperCase(), colors[Math.floor(Math.random() * colors.length)]))

    localStorage.setItem("data", JSON.stringify(tasks))
    updateTasks()
}



function updateTasks(){
    let tasks = [];
    if(localStorage.data != undefined){
        tasks = JSON.parse(localStorage.data);
    } 

    list.innerHTML = ''

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.className = "list-item --"+ task.color +" section";
        // li.onclick = completeTask;
        list.appendChild(li);
    });

    inputBox.value = ''
}



function completeTask(text){
    let tasks = JSON.parse(localStorage.data)
    tasks.splice(tasks.indexOf(tasks.find((task) => task.text == text)), 1)
    localStorage.setItem("data", JSON.stringify(tasks))
    updateTasks()
}
list.addEventListener("click", function(e){
    if(e.target.tagName = "li"){
        completeTask(e.target.innerHTML)
    }
})



function deleteAll(){
    localStorage.removeItem("data")
    updateTasks()
}



updateTasks()