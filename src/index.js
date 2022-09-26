import './css/initPageLoad.css';
import './css/modal.css';
import './css/projectBoard.css';
import {Task} from './functionnalities/Task';
import {newTask, ADDTASKBTN } from './view  ihm/TaskBoard';
import { modalContainer, form, manageModalReset } from './functionnalities/modal';
import { addProjectBtn, projectNameInput, ProjectBoard } from './view  ihm/ProjectBoard';
import { Project, ProjectList } from './functionnalities/Project';

ADDTASKBTN.addEventListener('click', ()=> {
    modalContainer.openModal()
});

function manageTaskCreation() {
    const brandNewTask = new Task(...form.getTaskDetailsValues());
    ProjectList.currentProject.taskList.addTask(brandNewTask);
    newTask.display();
}

form.SUBMIT_BTN.addEventListener('click', ()=> {
    if (form.isEveryInputInvalid()){
        if (form.SUBMIT_BTN.id === 'submit'){
            manageTaskCreation();
            manageModalReset();
        }
    }
    else {
        form.errorDisplay()
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













