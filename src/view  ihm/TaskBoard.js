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
        editTask.setAttribute('src', '../src/edit.svg')
        return editTask;
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
    
    return {
        display : ()=> {
            const newTask = getNewTask();
            const taskContainer = createNewTaskContainer();
            for (const detail in newTask){
                const detailToDisplay = document.createElement('p');
                detailToDisplay.classList.add(detail);
                detailToDisplay.textContent = newTask[detail];
                taskContainer.appendChild(detailToDisplay);
            }
            taskContainer.appendChild(taskOptions.optionsDivSetUp());
        }
    }
})()

export const updateDataIndex = ()=> {
    const taskContainers = Array.from(document.querySelectorAll('[data-index]'));
    if (taskContainers.length>0){
        taskContainers[0].setAttribute('data-index', 0);
        for (let i=0 ; i<taskContainers.length-1; i++){
            taskContainers[i+1].setAttribute('data-index', parseInt(taskContainers[i].getAttribute('data-index'))+1);
        }
    }
}

export const fullTask = (()=> {
    return {
        display : ()=> {
            newTask.display();
        }
    }
})()