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
    if(newTaskText && isNotHaveTask(newTaskText,tasks))
    addTask(newTaskText);
    dom.new.value='';
}
//Функция добавления задач
function addTask(text){
    const timeStamp=Date.now();
        const task={
            id:timeStamp,
            text:text,//либо написать просто text
            isComplate:false
        }
    tasks.push(task);
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