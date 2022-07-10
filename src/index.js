import './css/initPageLoad.css';
import './css/modal.css'
import {newTask, taskOptions, ADDTASKBTN} from './view  ihm/TaskBoard';
import {MODAL_CONTAINER} from './view  ihm/modal';

ADDTASKBTN.addEventListener('click', ()=> {
    /*newTask.display();
    taskOptions.create(); */
    MODAL_CONTAINER.classList.add('shown');
});














