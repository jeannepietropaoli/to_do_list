import '../css/TaskBoard.css';
import {Task, TaskList} from '../functionnalities/Task';
import { modalContainer, form, manageModalReset, formEditMode } from '../functionnalities/modal';
import { ProjectList } from '../functionnalities/Project';

export const TASKGRID = document.querySelector('.taskListGrid');
export const ADDTASKBTN = document.querySelector('.addBtn');

export const TaskBoard = (()=> {
    const clearTasks = ()=> {
        const tasks = Array.from(document.querySelectorAll('.task'));
        tasks.forEach(task => {
            task.remove();
        })
    }

    const displayProjectTitle = (title)=> {
        const taskBoardProjectTitle = document.querySelector('#taskBoardProjectTitle');
        taskBoardProjectTitle.textContent = `TaskBoard ~ Selected project : ${title}`;
    }

    const displayFirstProjectTitle = (() => {
        displayProjectTitle(ProjectList.currentProject.title);
    })()
    
    return {
        clearTasks,
        displayProjectTitle
    }
})()

const deleteButton = (()=> {
    const create = ()=> {
        const deleteTask = document.createElement('img');
        deleteTask.classList.add('deleteTask');
        deleteTask.setAttribute('src', '../src/delete.svg');
        manageDeleteTask(deleteTask);
        changeUrlOnHover(deleteTask)
        return deleteTask;
    }

    const updateDataIndex = ()=> {
        const taskContainers = Array.from(document.querySelectorAll('div[data-index]'));
        if (taskContainers.length>0){
            taskContainers[0].setAttribute('data-index', 0);
            for (let i=0 ; i<taskContainers.length-1; i++){
                taskContainers[i+1].setAttribute('data-index', parseInt(taskContainers[i].getAttribute('data-index'))+1);
            }
        }
    }

    const manageDeleteTask = (deleteBtn)=> {
        deleteBtn.addEventListener('click', (e) => {
            ProjectList.currentProject.taskList.deleteTask(e.target.parentElement.parentElement.getAttribute('data-index'));
            TASKGRID.removeChild(e.target.parentElement.parentElement);
            updateDataIndex();
        })
    }

    const changeUrlOnHover = (deleteBtn) => {
        deleteBtn.addEventListener('mouseover', ()=> {
            deleteBtn.setAttribute('src', '../src/deleteHover.png')
        })
        deleteBtn.addEventListener('mouseout', ()=> {
            deleteBtn.setAttribute('src', '../src/delete.svg')
        })
    }
    
    return {
        create
    }
})() 

export const editButton = (()=> {
    const create = ()=> {
        const editTask = document.createElement('img');
        editTask.classList.add('editTask');
        editTask.setAttribute('src', '../src/edit.svg');
        manageEditTask(editTask);
        changeUrlOnHover(editTask)
        return editTask;
    }

    const manageEditTask = (editBtn)=> {
        editBtn.addEventListener('click', (e)=> {
            ProjectList.currentProject.taskList.printList();
            const inputs = Array.from(e.target.parentElement.parentElement.children);
            const flag = inputs.filter(element => {
               return element.classList.contains('priorityFlag');
            });
            const stateColorPoint = inputs.filter(element => {
                return element.classList.contains('stateContainer');
            })[0].firstChild;
            formEditMode.open(inputs);
            formEditMode.inputsValidation();
            formEditMode.SUBMIT_CHANGES_BTN.addEventListener('click', ()=> {
                    formEditMode.validateChanges(e, inputs, stateColorPoint , flag[0]);
            }, {once : true})
        })
}

    const displayEditedTask = (editedTask, inputs, stateColorPoint, priorityFlag, taskContainer)=> {
        for (const detail in editedTask){
            let valueToUpdate;
            if (detail === '_state'){
                valueToUpdate = inputs.filter((element) => {
                    return element.className === 'stateContainer';
                })
                valueToUpdate = valueToUpdate[0].lastChild;
            }
            else {
                valueToUpdate = inputs.filter((element) => {
                    return element.className === `${detail}`;
                })
                valueToUpdate = valueToUpdate[0];
            }
            valueToUpdate.value = editedTask[detail];
        }
        stateColorPoint.setAttribute('src', `../src/${editedTask.state}.png`);
        priorityFlag.setAttribute('src', `../src/flag_${editedTask.priority}.png`);
        (editedTask.state === 'done') ? taskContainer.style.opacity = 0.7 : taskContainer.style.opacity = 1;
    }

    const changeUrlOnHover = (editBtn) => {
        editBtn.addEventListener('mouseover', ()=> {
            editBtn.setAttribute('src', '../src/editHover.png')
        })
        editBtn.addEventListener('mouseout', ()=> {
            editBtn.setAttribute('src', '../src/edit.svg')
        })
    }

    return {
        create,
        displayEditedTask
    }
})() 

export const taskOptions = (()=> {
    const createOptionsDiv = ()=> {
        const options = document.createElement('div');
        options.classList.add('options');
        return options;
    }

    const optionsDivSetUp = ()=> {
        const optionsDiv = createOptionsDiv();
        optionsDiv.append(editButton.create(), deleteButton.create());
        return optionsDiv
    }

    return {
        optionsDivSetUp
    }
})()

const taskState = (task)=> {
    const stateColorPoint = document.createElement('img');

    const createStateColorPoint = (task)=> {
        stateColorPoint.classList.add('stateColorPoint');
        stateColorPoint.setAttribute('src', `../src/${task.state}.png`);
        return stateColorPoint;
    }

    const editColor = (task)=> {
        stateColorPoint.setAttribute('src', `../src/${task.state}.png`)
    }

    const checkIfDone = (task)=> {
        return task.state === 'done';
    }
    return {
        stateColorPoint,
        createStateColorPoint,
        editColor, 
        checkIfDone
    }
}

const taskPriority = ()=> {
    const priorityFlag = document.createElement('img');

    const createPriorityDiv = (task)=> {
        priorityFlag.setAttribute('src', `../src/flag_${task.priority}.png`);
        priorityFlag.classList.add('priorityFlag');
        return priorityFlag;
    }

    const editColor = (task)=> {
        priorityFlag.setAttribute('src', `../src/flag_${task.priority}.png`);
    }
    return {
        createPriorityDiv,
        editColor
    }
}

export const newTask = (()=> {
    const getNewTask = ()=> {
        const list = ProjectList.currentProject.taskList.getList();
        return list[list.length-1];
    }

    const createNewTaskContainer = ()=> {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');
        taskContainer.setAttribute('data-index', ProjectList.currentProject.taskList.getList().length-1);
        TASKGRID.appendChild(taskContainer);
        return taskContainer;
    }

    const createTaskDetail = (detail, newTask)=> {
        const detailToDisplay = document.createElement('input');
        detailToDisplay.readOnly = true;
        detailToDisplay.classList.add(detail);
        detailToDisplay.value = newTask[detail];
        return detailToDisplay;
    }

    const appendTaskDetail = (taskContainer, detailToDisplay)=> {
        taskContainer.appendChild(detailToDisplay);
    } 
    
    const displayTasks = (newTask)=> {
        const taskContainer = createNewTaskContainer();
            for (const detail in newTask){
                const detailToDisplay = createTaskDetail(detail, newTask);
                if (detail === '_state'){
                    const stateContainer = document.createElement('div');
                    stateContainer.classList.add('stateContainer');
                    appendTaskDetail(taskContainer, stateContainer);
                    appendTaskDetail(stateContainer, detailToDisplay);
                    const taskStatePoint = taskState();
                    stateContainer.insertBefore(taskStatePoint.stateColorPoint, stateContainer.firstChild)
                    taskStatePoint.createStateColorPoint(newTask);
                }
                else {
                    appendTaskDetail(taskContainer, detailToDisplay);
                }
            }
            newTask.state === 'done' ? taskContainer.style.opacity = 0.7 : taskContainer.style.opacity = 1;
            const flag = taskPriority();
            taskContainer.appendChild(flag.createPriorityDiv(newTask));
            taskContainer.appendChild(taskOptions.optionsDivSetUp());
        }

    return {
        display : ()=> {
            const newTask = getNewTask();
            displayTasks(newTask);
        }
        ,
        displayEachTask : (i)=> {
            const newTask = ProjectList.currentProject.taskList.getList()[i];
            displayTasks(newTask);
            const taskContainers = Array.from(document.querySelectorAll('div[data-index]'));
        if (taskContainers.length>0){
            taskContainers[0].setAttribute('data-index', 0);
            for (let i=0 ; i<taskContainers.length-1; i++){
                taskContainers[i+1].setAttribute('data-index', parseInt(taskContainers[i].getAttribute('data-index'))+1);
            }
        }
        }
    }
})()