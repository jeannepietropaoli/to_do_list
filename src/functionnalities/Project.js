import { TaskList } from "./Task";
import { ProjectBoard } from "../view  ihm/ProjectBoard";
import { populateStorage } from '../index';

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

    const addProject = (newProject)=> {
        list.push(newProject);
    }

    const deleteProject = (projectIndex) => {
        list.splice(projectIndex , 1);
        populateStorage()
    }

    return {
        currentProject,
        getList,
        addProject,
        deleteProject
    }
})()

export const firstProject = (title)=> {
    const project = new Project(title);
    ProjectList.addProject(project);
    ProjectBoard.displayNewProject(project.title);
    return project
}

ProjectList.currentProject = firstProject('First Project - Start here');
ProjectBoard.highlightCurrentProject(ProjectBoard.selectProjectBoardCurrentProject());




