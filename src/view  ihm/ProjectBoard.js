import { ProjectList } from "../functionnalities/Project";
import { newTask, TaskBoard } from "./TaskBoard";
import deleteProjectImg from '../deleteProject.png'; 

export const addProjectBtn = document.querySelector('.addProject');
export const projectNameInput = document.querySelector('#projectName');

export const ProjectBoard = (() => {
    const projectList = document.querySelector('#projectList');

    const clearProjectNameInput = ()=> {
        projectNameInput.value = '';
    }

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
        const newProjectDeleteBtn = document.createElement('img');
        newProjectDeleteBtn.setAttribute('src', deleteProjectImg);
        newProjectDeleteBtn.setAttribute('data-index', ProjectList.getList().length-1); 
        newProjectContainer.appendChild(newProjectDeleteBtn);
        return newProjectDeleteBtn;
    }

    const selectTheProject = (clickableSection)=> {
        clickableSection.addEventListener('click', (e)=> {
            if (ProjectList.getList().includes(ProjectList.currentProject)) {
                removeHighlight(selectProjectBoardCurrentProject());
            }
            ProjectList.currentProject = ProjectList.getList()[e.target.nextElementSibling.getAttribute('data-index')];
            localStorage.setItem('currentProject', JSON.stringify(ProjectList.currentProject));
            TaskBoard.clearTasks();
            highlightCurrentProject(selectProjectBoardCurrentProject());
            TaskBoard.displayProjectTitle(ProjectList.currentProject.title);
            let i=0;
            ProjectList.currentProject.taskList.getList().forEach((task)=> {
                newTask.displayEachTask(i);
                i = i+1;
                })
        })
    }

    const updateDataIndex = ()=> {
        const deletBtns = Array.from(document.querySelectorAll('img[data-index]'));
        if (deletBtns.length>0){
            deletBtns[0].setAttribute('data-index', 0);
            for (let i=0 ; i<deletBtns.length-1; i++){
                deletBtns[i+1].setAttribute('data-index', parseInt(deletBtns[i].getAttribute('data-index'))+1);
            }
        }
    }

    const resetCurrentProjectIfDeleted = () => {
        if (! ProjectList.getList().includes(ProjectList.currentProject)) {
            ProjectList.currentProject = ProjectList.getList()[0];
            localStorage.setItem('currentProject', JSON.stringify(ProjectList.currentProject));
            TaskBoard.displayCurrentProjectsTasks(); 
            TaskBoard.displayProjectTitle(ProjectList.currentProject.title);
            highlightCurrentProject(selectProjectBoardCurrentProject());
        } 
    }

    const activateDeleteBtn = (deleteBtn) => {
        deleteBtn.addEventListener('click', (e)=> {
            if (ProjectList.currentProject === ProjectList.getList()[e.target.getAttribute('data-index')]){
                TaskBoard.clearTasks();
            }
            projectList.removeChild(e.target.parentElement);
            ProjectList.deleteProject(e.target.getAttribute('data-index'));
            updateDataIndex();
           resetCurrentProjectIfDeleted();
        })
    }

    const displayNewProject = (projectName) => {
        const newProjectContainer = createNewProjectContainer();
        displayNewProjectTitle(projectName, newProjectContainer);
        const deleteBtn = displayNewProjectDeleteBtn(newProjectContainer);
        activateDeleteBtn(deleteBtn);
        updateDataIndex();
    }

    const highlightCurrentProject = (projectBoardCurrentProject) => {
        projectBoardCurrentProject.style.backgroundColor = 'rgba(255,255,255, 0.3)';
    }

    const removeHighlight = (projectBoardCurrentProject) => {
        projectBoardCurrentProject.style.backgroundColor = 'transparent';
    }

    const selectProjectBoardCurrentProject = ()=> {
        const currentProjectIndex = ProjectList.getList().indexOf(ProjectList.currentProject).toString();
        return document.querySelector(`img[data-index = '${currentProjectIndex}']`).parentElement;
    }

    return {
        displayNewProject,
        clearProjectNameInput,
        removeHighlight,
        highlightCurrentProject,
        selectProjectBoardCurrentProject
    }
})()

export const displayLocalStoragedProjects = (()=> {
    ProjectList.getList().forEach(project => {
        ProjectBoard.displayNewProject(project.title);
    })
})

