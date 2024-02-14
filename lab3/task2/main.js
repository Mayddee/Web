// var myList = document.getElementsByTagName("li");
// var i = 0;
// for(i = 0; i < myList.length; i++){
//     var span = document.createElement("span");
//     var text = document.createTextNode("\u00D7");
//     span.className = "del";
//     span.appendChild(text);
//     myList[i].appendChild(span);
// }
// var del = document.getElementsByClassName("del");
// function deleteItem(index){
//     var li = del[index].parentElement;
//     li.style.display = "none";
// }

// for(i = 0; i < myList.length; i++){
//     del[i].onclick = function(){
//         var li = this.parentElement;
//         li.style.display = "none";
//     }
// }

// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// function addItem() {
//     let li = document.createElement("li");
//     var inputVal = getElementById()
// }


const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
function addTask() {
    const txt = taskInput.value.trim();
    if (txt !== '') {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);
        
        const span = document.createElement('span');
        span.textContent = txt;
        li.appendChild(span);
        taskList.appendChild(li);

        taskInput.value = '';

        const del = document.createElement('button');
        del.textContent = 'Delete';
        del.addEventListener('click', deleteTask);
        li.appendChild(del);
        del.setAttribute('class', 'delete btn');
       

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through';
            } else {
                span.style.textDecoration = 'none';
            }
        });
    }
}

function deleteTask(event){
    const task = event.target.parentElement;
    taskList.removeChild(task);
}
// function completeTask(event){
//     const task = event.target.parentElement;
//     task.toggle('completed');
// }



// const check = document.createElement('input');
//         check.setAttribute("type", "checkbox");
//         check.addEventListener('click', completeTask);
//         li.appendChild(check);