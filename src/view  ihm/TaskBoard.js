import '../css/TaskBoard.css';
import {TaskList} from '../functionnalities/Task';

export const TASKGRID = document.querySelector('.taskListGrid');
export const ADDTASKBTN = document.querySelector('.addBtn');

const deleteButton = (()=> {
    const create = ()=> {
        const deleteTask = document.createElement('img');
        deleteTask.classList.add('deleteTask');
        deleteTask.setAttribute('src', '../src/delete.svg');
        manageDeleteTask(deleteTask);
        return deleteTask;
    }

    const updateDataIndex = ()=> {
        const taskContainers = Array.from(document.querySelectorAll('[data-index]'));
        if (taskContainers.length>0){
            taskContainers[0].setAttribute('data-index', 0);
            for (let i=0 ; i<taskContainers.length-1; i++){
                taskContainers[i+1].setAttribute('data-index', parseInt(taskContainers[i].getAttribute('data-index'))+1);
            }
        }
    }

    const manageDeleteTask = (deleteBtn)=> {
        deleteBtn.addEventListener('click', (e) => {
            TaskList.deleteTask(e.target.parentElement.parentElement.getAttribute('data-index'));
            TASKGRID.removeChild(e.target.parentElement.parentElement);
            updateDataIndex();
        })
    }
    
    return {
        create
    }
})() 

const editButton = (()=> {
    const create = ()=> {
        const editTask = document.createElement('img');
        editTask.classList.add('editTask');
        editTask.setAttribute('src', '../src/edit.svg');
        manageEditTask(editTask);
        return editTask;
    }

    const trasnformInputsBorders = (inputs)=> {
        inputs.forEach(input => {
            input.style.borderColor = 'red';
            input.style.cursor = 'pointer';
        })
    }

    const changeInputValue = ()=> {
        
    }

    const manageEditTask = (editBtn)=> {
        editBtn.addEventListener('click', (e)=> {
            console.log(e.target.parentElement.parentElement);
            const inputs = Array.from(e.target.parentElement.parentElement.children);
            console.log(inputs);
            trasnformInputsBorders(inputs);
            changeInputValue();
        })
    }

    return {
        create
    }
})() 

export const taskOptions = (()=> {
    const createOptionsDiv = ()=> {
        const options = document.createElement('div');
        options.classList.add('options');
        return options;
    }

    const optionsDivSetUp = ()=> {
        const optionsDiv = createOptionsDiv();
        optionsDiv.append(editButton.create(), deleteButton.create());
        return optionsDiv
    }

    return {
        optionsDivSetUp
    }
})()

export const newTask = (()=> {
    const getNewTask = ()=> {
        const list = TaskList.getList();
        return list[list.length-1];
    }

    const createNewTaskContainer = ()=> {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');
        taskContainer.setAttribute('data-index', TaskList.getList().length-1);
        TASKGRID.appendChild(taskContainer);
        return taskContainer;
    }

    const createTaskDetail = (detail, newTask)=> {
        const detailToDisplay = document.createElement('input');
        detailToDisplay.classList.add(detail);
        detailToDisplay.value = newTask[detail];
        detailToDisplay.style.width = `${detailToDisplay.value.length}ch`;
        detailToDisplay.disabled = 'true';
        return detailToDisplay;
    }

    const appendTaskDetail = (taskContainer, detailToDisplay)=> {
        taskContainer.appendChild(detailToDisplay);
    } 
    
    return {
        display : ()=> {
            const newTask = getNewTask();
            const taskContainer = createNewTaskContainer();
            for (const detail in newTask){
                const detailToDisplay = createTaskDetail(detail, newTask);
                appendTaskDetail(taskContainer, detailToDisplay);
            }
            taskContainer.appendChild(taskOptions.optionsDivSetUp());
        }
    }
})()