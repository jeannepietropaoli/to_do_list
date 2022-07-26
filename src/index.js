import './css/initPageLoad.css';
import './css/modal.css';
import {TaskList, Task} from './functionnalities/Task';
import {newTask, taskOptions, ADDTASKBTN, fullTask} from './view  ihm/TaskBoard';
import { modalContainer, form, manageModalReset, formEditMode } from './functionnalities/modal';

ADDTASKBTN.addEventListener('click', ()=> {modalContainer.openModal()});

function manageTaskCreation() {
    const brandNewTask = new Task(...form.getInputsValues());
    TaskList.addTask(brandNewTask);
    newTask.display();
}

form.SUBMIT_BTN.addEventListener('click', ()=> {
    if (!form.isOneInputInvalid()){
        if (form.SUBMIT_BTN.id === 'submit'){
            manageTaskCreation();
            manageModalReset();
        }
    }
})











