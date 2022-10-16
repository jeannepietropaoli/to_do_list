import { Task } from './Task';
import { Project, ProjectList } from './Project';

const savedTaskLists = JSON.parse(localStorage.getItem('savedTasksLists'));

export function populateProjectStorage() {
    localStorage.setItem('savedProjectList', JSON.stringify(ProjectList.getList()));
}

export function populateTaskListStorage() {
    localStorage.setItem('savedTasksLists', JSON.stringify(ProjectList.getList().map(project => {
        return project.taskList.getList()
    })))
}

export function retrieveSavedProjects() {
    const localStoragedProjects = JSON.parse(localStorage.getItem('savedProjectList'));
    for (const projectKey in localStoragedProjects) {
        const retrievedProject = new Project(localStoragedProjects[projectKey]._title);
        ProjectList.addProject(retrievedProject);
    }
}

export function retrievedCurrentProject() {
    const savedCurrentProject = JSON.parse(localStorage.getItem('currentProject'));
    ProjectList.currentProject = ProjectList.getList().filter(project => project.title === savedCurrentProject._title)[0];
}

export function retrieveSavedTaskLists() {
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

export function populateCurrentProjectStorage() {
    localStorage.setItem('currentProject', JSON.stringify(ProjectList.currentProject));
}

export function isLocalStorageEmpty(){
    return localStorage.length === 0 ? true : false;
}
