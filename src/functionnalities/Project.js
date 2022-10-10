import { TaskList } from "./Task";
import { ProjectBoard } from "../view  ihm/ProjectBoard";
import { populateProjectStorage } from '../index';

export class Project {

    constructor(title) {
        this._title = title;
        this._taskList = TaskList();
    }
    
    get title() {
        return this._title
    }

    set title(value) {
        this._title = value;
    }

    set taskList(value) {
        this._taskList = value;
    }

    get taskList() {
        return this._taskList;
    }
}

export const ProjectList = (()=> {

    let currentProject;

    const list = [];

    const getList = ()=> {
            return list;
    }

    const resetCurrentProjectIfDeleted = ()=> {
        if (! currentProject) {
            currentProject = list[0];
            localStorage.setItem('currentProject', JSON.stringify(currentProject));
        }
    }

    const addProject = (newProject)=> {
        list.push(newProject);
        populateProjectStorage();
    }

    const deleteProject = (projectIndex) => {
        list.splice(projectIndex , 1);
        resetCurrentProjectIfDeleted();
        populateProjectStorage();
    }

    return {
        currentProject,
        getList,
        addProject,
        resetCurrentProjectIfDeleted,
        deleteProject
    }
})()

export const firstProject = (title)=> {
    const project = new Project(title);
    ProjectList.addProject(project);
    ProjectBoard.displayNewProject(project.title);
    return project
}

export function setStartingProject(){
    ProjectList.currentProject = firstProject('First Project - Start here');
    ProjectBoard.highlightCurrentProject(ProjectBoard.selectProjectBoardCurrentProject());
}



