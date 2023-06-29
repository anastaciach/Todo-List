//Добавление задачи
const dom = {
    new: document.getElementById('new'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks')
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
                <div></div>
            </label>
            <div class="todo__task-text">${task.text}</div>
            <div class="todo__task-del">-</div>
        </div>
        `;
        htmlList+=taskHtml;
    })
    dom.tasks.innerHTML=htmlList;
}