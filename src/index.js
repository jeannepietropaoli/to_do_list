import './css/initPageLoad.css';
import './css/modal.css';
import './css/projectBoard.css';
import {Task} from './functionnalities/Task';
import {newTask, ADDTASKBTN, TaskBoard } from './view  ihm/TaskBoard';
import { modalContainer, form, manageModalReset } from './functionnalities/modal';
import { addProjectBtn, projectNameInput, ProjectBoard, displayLocalStoragedProjects, highlightCurrentProject, selectProjectBoardCurrentProject } from './view  ihm/ProjectBoard';
import { Project, ProjectList, setStartingProject } from './functionnalities/Project';

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
           /*  populateTaskListStorage() */
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
        console.log(ProjectList.getList()[0].taskList.getList());
        /* populateProjectStorage(); */
    }
})

const localStoragedProjects = JSON.parse(localStorage.getItem('savedProjectList'));

export function populateProjectStorage() {
    localStorage.setItem('savedProjectList', JSON.stringify(ProjectList.getList()));
}

export function populateTaskListStorage() {
    localStorage.setItem('savedTasksLists', JSON.stringify(ProjectList.getList().map(project => {
        return project.taskList.getList()
    })))
}

function retrieveSavedProjects() {
    for (const projectKey in localStoragedProjects) {
        const retrievedProject = new Project(localStoragedProjects[projectKey]._title);
        ProjectList.addProject(retrievedProject);
    }
}

function retrievedCurrentProject() {
    const savedCurrentProject = JSON.parse(localStorage.getItem('currentProject'));
    ProjectList.currentProject = ProjectList.getList().filter(project => project.title === savedCurrentProject._title)[0];
}

function retrieveSavedTaskLists() {
    const savedTaskLists = JSON.parse(localStorage.getItem('savedTasksLists'));
    let i = 0;
    for (const taskListKey in savedTaskLists) {
        for (const task in savedTaskLists[taskListKey]) {
            const taskToRetrieve = savedTaskLists[taskListKey][task];
            const arrInfosOfTaskToRetrieve = Object.keys(taskToRetrieve).map(key => taskToRetrieve[key]);
            const newTask = new Task(...arrInfosOfTaskToRetrieve);
            ProjectList.getList()[i].taskList.addTask(newTask);
        }
        i++
    }
}

function populateCurrentProjectStorage() {
    localStorage.setItem('currentProject', JSON.stringify(ProjectList.currentProject));
}

if (localStorage.length === 0) {
    setStartingProject();
    TaskBoard.displayProjectTitle(ProjectList.currentProject.title);
    populateCurrentProjectStorage();
    populateProjectStorage()
    localStorage.setItem('savedTaskLists', [[]]);
}

else {
    retrieveSavedProjects()
    retrievedCurrentProject()
    retrieveSavedTaskLists();
    TaskBoard.displayCurrentProjectsTasks();
    displayLocalStoragedProjects();
    ProjectBoard.highlightCurrentProject(ProjectBoard.selectProjectBoardCurrentProject());
    TaskBoard.displayProjectTitle(ProjectList.currentProject.title);
}


  














