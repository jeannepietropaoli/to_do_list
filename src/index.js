import './css/initPageLoad.css';
import './css/modal.css';
import './css/projectBoard.css';
import { Task } from './functionnalities/Task';
import {newTask, ADDTASKBTN, TaskBoard } from './view  ihm/TaskBoard';
import { modalContainer, form, manageModalReset, formEditMode } from './functionnalities/modal';
import { addProjectBtn, projectNameInput, ProjectBoard, displayLocalStoragedProjects } from './view  ihm/ProjectBoard';
import { Project, ProjectList, setStartingProject } from './functionnalities/Project';
import { retrievedCurrentProject, retrieveSavedProjects, retrieveSavedTaskLists, populateCurrentProjectStorage, populateProjectStorage, isLocalStorageEmpty } from './functionnalities/localStorage';

formEditMode.SUBMIT_CHANGES_BTN.disabled = true;

ADDTASKBTN.addEventListener('click', ()=> {
    formEditMode.editModeActivated = false;
    modalContainer.openModal();
});

function manageTaskCreation() {
    const brandNewTask = new Task(...form.getTaskDetailsValues());
    ProjectList.currentProject.taskList.addTask(brandNewTask);
    newTask.display();
}

form.SUBMIT_BTN.addEventListener('click', ()=> {
    if (form.isEveryInputValid()){
        if (form.SUBMIT_BTN.id === 'submit'){
            manageTaskCreation();
            manageModalReset();
        }
    }
    else {
        form.errorDisplay();
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


if (isLocalStorageEmpty()) {
    setStartingProject();
    TaskBoard.displayProjectTitle(ProjectList.currentProject.title);
    populateCurrentProjectStorage();
    populateProjectStorage();
    localStorage.setItem('savedTaskLists', [[]]);
}

else {
    retrieveSavedProjects();
    retrievedCurrentProject();
    retrieveSavedTaskLists();
    TaskBoard.displayCurrentProjectsTasks();
    displayLocalStoragedProjects();
    ProjectBoard.highlightCurrentProject(ProjectBoard.selectProjectBoardCurrentProject());
    TaskBoard.displayProjectTitle(ProjectList.currentProject.title);
}














