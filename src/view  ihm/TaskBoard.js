import '../css/TaskBoard.css';
import {TaskList} from '../functionnalities/Task';

export const TASKGRID = document.querySelector('.taskListGrid');
export const ADDTASKBTN = document.querySelector('.addBtn');

/* const deleteBtn = ()=> {
    const create = ()=> {
        const deleteTask = document.createElement('img');
        deleteTask.classList.add('deleteTask');
        deleteTask.setAttribute('src', '../src/delete.svg');
        return deleteTask;
    }
} */

export const taskOptions = (()=> {
    const createOptionsDiv = ()=> {
        const options = document.createElement('div');
        options.classList.add('options');
        return options;
    }
    const createDeleteBtn = ()=> {
        const deleteTask = document.createElement('img');
        deleteTask.classList.add('deleteTask');
        deleteTask.setAttribute('src', '../src/delete.svg');
        return deleteTask;
    }

    const createEditBtn = ()=> {
        const editTask = document.createElement('img');
        editTask.classList.add('editTask');
        editTask.setAttribute('src', '../src/edit.svg')
        return editTask;
    }

    return {
        getOptionsDiv : ()=> {
            const optionDiv = createOptionsDiv();
            const deleteBtn = createDeleteBtn();
            const editBtn = createEditBtn();
            manageDeleteTask(deleteBtn);
            optionDiv.append(editBtn, deleteBtn);
            return optionDiv
        }
    }
})()

const manageDeleteTask = (deleteBtn)=> {
    deleteBtn.addEventListener('click', (e) => {
        TaskList.deleteTask(e.target.parentElement.parentElement.getAttribute('data-index'));
        TASKGRID.removeChild(e.target.parentElement.parentElement);
        updateDataIndex();
    })
}

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
            taskContainer.appendChild(taskOptions.getOptionsDiv());
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