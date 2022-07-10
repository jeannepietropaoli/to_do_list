import '../css/TaskBoard.css';
import {TaskList} from '../functionnalities/Task';

const TASKGRID = document.querySelector('.taskListGrid');
export const ADDTASKBTN = document.querySelector('.addBtn');

export const taskOptions = (()=> {
    const createOptionsDiv = ()=> {
        const options = document.createElement('div');
        options.classList.add('options');
        TASKGRID.appendChild(options);
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
        create : ()=> {
            createOptionsDiv().append(createEditBtn(), createDeleteBtn());
        }
    }
})()

export const newTask = (()=> {
    const create = ()=> {
        return TaskList.addTask();
    }
    
    return {
        display : ()=> {
            const newTask = create();
            for (const detail in newTask){
                const detailToDisplay = document.createElement('p');
                detailToDisplay.textContent = newTask[detail];
                TASKGRID.appendChild(detailToDisplay);
            }
        }
    }
})()