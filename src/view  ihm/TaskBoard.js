import '../css/TaskBoard.css';
import {Task, TaskList} from '../functionnalities/Task';
import { modalContainer, form, manageModalReset } from '../functionnalities/modal';

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

    const manageEditTask = (editBtn)=> {
        editBtn.addEventListener('click', (e)=> {
            form.SUBMIT_CHANGES_BTN.disabled = false;
            const inputs = Array.from(e.target.parentElement.parentElement.children);
            form.fillFormInputsWithCurrentValues(inputs);
            modalContainer.openModal();
            form.INPUTS.forEach(input => {
                input.addEventListener('change', ()=> {
                    if (!form.isOneInputInvalid()) {
                        form.SUBMIT_CHANGES_BTN.disabled = false;
                    }
                    if (form.isOneInputInvalid()){
                        form.SUBMIT_CHANGES_BTN.disabled = true;
                    }
                })
            })
            form.SUBMIT_CHANGES_BTN.addEventListener('click', ()=> {
                if (!form.isOneInputInvalid()){
                    let editedTask = new Task(...form.getInputsValues());
                    console.log(e.target.parentElement.parentElement.getAttribute('data-index'));
                    TaskList.editTask(e.target.parentElement.parentElement.getAttribute('data-index'), editedTask);
                    displayEditedTask(editedTask, inputs);
                    manageModalReset();
                }
                form.SUBMIT_CHANGES_BTN.disabled = true;
            }, {once : true})
        })
    }

    const displayEditedTask = (editedTask, inputs)=> {
        for (const detail in editedTask){
            let valueToUpdate = inputs.filter((element) => {
                return element.className === `${detail}`;
            })
            valueToUpdate[0].value= editedTask[detail];
        }
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