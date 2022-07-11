import '../css/TaskBoard.css';
import {TaskList} from '../functionnalities/Task';

const TASKGRID = document.querySelector('.taskListGrid');
export const ADDTASKBTN = document.querySelector('.addBtn');

export const taskOptions = (()=> {
    const createOptionsDiv = ()=> {
        const options = document.createElement('div');
        options.classList.add('options');
        return options;
    }
    const createDeleteBtn = ()=> {
        const deleteTask = document.createElement('img');
        deleteTask.classList.add('deleteTask');
        deleteTask.setAttribute('src', '../src/delete.svg')
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
            optionDiv.append(createEditBtn(), createDeleteBtn());
            return optionDiv
        }
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
        taskContainer.setAttribute('data-index', `${TaskList.getList().length-1}`);
        TASKGRID.appendChild(taskContainer);
        return taskContainer;
    }
    
    return {
        display : ()=> {
            const newTask = getNewTask();
            const taskContainer = createNewTaskContainer();
            for (const detail in newTask){
                const detailToDisplay = document.createElement('p');
                detailToDisplay.textContent = newTask[detail];
                taskContainer.appendChild(detailToDisplay);
            }
            taskContainer.appendChild(taskOptions.getOptionsDiv());
        }
    }
})()

export const fullTask = (()=> {
    return {
        display : ()=> {
            newTask.display();
        }
    }
})()