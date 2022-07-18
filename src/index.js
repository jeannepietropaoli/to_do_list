import './css/initPageLoad.css';
import './css/modal.css';
import {TaskList, Task} from './functionnalities/Task';
import {newTask, taskOptions, ADDTASKBTN, fullTask} from './view  ihm/TaskBoard';
import { modalContainer, form } from './functionnalities/modal';

ADDTASKBTN.addEventListener('click', ()=> {modalContainer.openModal()});

function manageTaskCreation() {
    const brandNewTask = new Task(...form.getInputsValues());
    TaskList.addTask(brandNewTask);
    fullTask.display();
}

function manageModalReset() {
    modalContainer.closeModal();
    form.clearInputsValues();
}

form.SUBMIT_BTN.addEventListener('click', ()=> {
    if (!form.isOneInputInvalid()){
        manageTaskCreation();
        manageModalReset();
    }
})









