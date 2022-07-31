import { ProjectList } from "../functionnalities/Project";
import { projectList } from '../functionnalities/Project';
import { newTask, TaskBoard } from "./TaskBoard";

export const addProjectBtn = document.querySelector('.addProject');
export const projectNameInput = document.querySelector('#projectName');

export const ProjectBoard = (() => {
    const projectList = document.querySelector('#projectList');

    const createNewProjectContainer = ()=> {
        const newProjectContainer = document.createElement('li');
        projectList.appendChild(newProjectContainer);
        return newProjectContainer;
    }
    
    const displayNewProjectTitle = (projectName, newProjectContainer) => {
        const newProjectTitle = document.createElement('h4');
        newProjectTitle.textContent = projectName;
        newProjectContainer.appendChild(newProjectTitle);
        selectTheProject(newProjectTitle);
    }

    const displayNewProjectDeleteBtn = (newProjectContainer) => {
        const newProjectDeleteBtn = document.createElement('h4');
        newProjectDeleteBtn.textContent = 'x';
        newProjectDeleteBtn.setAttribute('data-index', ProjectList.getList().length-1); 
        newProjectContainer.appendChild(newProjectDeleteBtn);
        return newProjectDeleteBtn;
    }

    const selectTheProject = (clickableSection)=> {
        clickableSection.addEventListener('click', (e)=> {
            ProjectList.currentProject = ProjectList.getList()[e.target.nextElementSibling.getAttribute('data-index')];
            console.log(ProjectList.currentProject);
            console.log(ProjectList.currentProject.taskList.getList())
                TaskBoard.clearTasks();
                ProjectList.currentProject.taskList.getList().forEach((task)=> {
                    let i=0;
                    newTask.displayEachTask(i);
                    i++;
                })
        })
    }

    const updateDataIndex = ()=> {
        const deletBtns = Array.from(document.querySelectorAll('h4[data-index]'));
        console.log(deletBtns)
        if (deletBtns.length>0){
            deletBtns[0].setAttribute('data-index', 0);
            for (let i=0 ; i<deletBtns.length-1; i++){
                deletBtns[i+1].setAttribute('data-index', parseInt(deletBtns[i].getAttribute('data-index'))+1);
            }
        }
    }

    const activateDeleteBtn = (deleteBtn) => {
        deleteBtn.addEventListener('click', (e)=> {
            ProjectList.deleteProject(e.target.getAttribute('data-index'));
            projectList.removeChild(e.target.parentElement)
        })
    }

    const displayNewProject = (projectName) => {
        const newProjectContainer = createNewProjectContainer();
        displayNewProjectTitle(projectName, newProjectContainer);
        const deleteBtn = displayNewProjectDeleteBtn(newProjectContainer);
        activateDeleteBtn(deleteBtn);
        updateDataIndex();
    }

    return {
        displayNewProject
    }
})()
