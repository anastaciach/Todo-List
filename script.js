//Добавление задачи
const dom = {
    new: document.getElementById('new'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks'),
    count: document.getElementById('count')
}
console.log(dom);
const tasks=[];
dom.add.onclick=()=>{
    const newTaskText=dom.new.value;
    if(newTaskText && isNotHaveTask(newTaskText,tasks)){
    addTask(newTaskText,tasks);}
    dom.new.value='';
    tasksRender(tasks);
}
//Функция добавления задач
function addTask(text,list){
    const timeStamp=Date.now();
        const task={
            id:timeStamp,
            text:text,//либо написать просто text
            isComplete:false
        }
    list.push(task);
    console.log(tasks);
}
//Проверка существование задачи в массиве задач
function isNotHaveTask(text,list){
    let isNotHave=true;
    list.forEach((task)=>{
        if(task.text===text){
            alert("Такая задача существует! ");
            isNotHave=false;
        }
    })

    return isNotHave;
}
//Функция вывода списка задач
function tasksRender(list){
    let htmlList='';
    list.forEach((task)=>{
        const cls= task.isComplete ?
        "todo__task todo__task-complete"
        : "todo__task";
        const checked=(task.isComplete) ? 'checked':"";
       const taskHtml= `
       <div id="${task.id}" class="${cls}">
            <label class="todo__checkbox">
                <input type="checkbox" ${checked}">
                <div class="todo__checkbox-div"></div>
            </label>
            <div class="todo__task-text">${task.text}</div>
            <div class="todo__task-del">-</div>
        </div>
        `;
        htmlList+=taskHtml;
    })
    dom.tasks.innerHTML=htmlList;
    renderTaskCount(list);
}
//Отслеживаем клик по chekсbox задачи
dom.tasks.onclick=(event)=>{
    const target=event.target;
    const isCheckboxEl =target.classList.contains('todo__checkbox-div');
    const isDeleteEl =target.classList.contains('todo__task-del');
    if(isCheckboxEl){
     // const isComplete=target.previousElementSibling.checked;
       const task=target.parentElement.parentElement;
       const taskId=task.getAttribute('id');
       changeTaskStatus(taskId,tasks);
       console.log(taskId);
       tasksRender(tasks);
    }
    if(isDeleteEl){
        const task=target.parentElement;
        const taskId=task.getAttribute('id');
        deleteTask(taskId,tasks);
    }
}
//Функция изменения статуса задачи
function changeTaskStatus(id,list){
    list.forEach((task)=>{
        if(task.id==id)
        task.isComplete=!task.isComplete;
    })
}
//функция удаления задачи
function deleteTask(id,list){
    list.forEach((task,idx)=>{
        if(task.id==id)
        list.slice(idx,1);
    })
    console.log(list);
}
//Вывод кол-ва задач
function renderTaskCount(list){
    dom.count.innerHTML=list.length;
}