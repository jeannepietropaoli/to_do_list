import './css/initPageLoad.css';
import './css/modal.css';
import './css/projectBoard.css';
import {TaskList, Task} from './functionnalities/Task';
import {newTask, taskOptions, ADDTASKBTN, fullTask} from './view  ihm/TaskBoard';
import { modalContainer, form, manageModalReset, formEditMode } from './functionnalities/modal';
import { addProjectBtn, projectNameInput, ProjectBoard } from './view  ihm/ProjectBoard';
import { Project, ProjectList, firstProject } from './functionnalities/Project';

ADDTASKBTN.addEventListener('click', ()=> {modalContainer.openModal()});

function manageTaskCreation() {
    const brandNewTask = new Task(...form.getInputsValues());
    ProjectList.currentProject.taskList.addTask(brandNewTask);
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


addProjectBtn.addEventListener('click', ()=> {
    if (projectNameInput.value !== ''){
        const brandNewProject = new Project(projectNameInput.value);
        ProjectList.addProject(brandNewProject);
        ProjectBoard.displayNewProject(brandNewProject.title);
        ProjectBoard.clearProjectNameInput();
    }
})













