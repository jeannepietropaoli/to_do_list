import '../css/TaskBoard.css';
import {TaskList} from '../functionnalities/Task';

const MAIN = document.querySelector('main');

const TaskBoardTitle = (()=> {
    const titleContent = 'Task Board';

    const createTitle = ()=> {
        const title = document.createElement('h3');
        title.textContent = titleContent;
        return title;
    }

    const display = ()=> {
        MAIN.appendChild(createTitle());
    }
    return {
        display,
    }
})()

const TaskListGrid = (()=> {
    const createTaskListGrid = ()=> {
        const taskListGrid = document.createElement('div');
        taskListGrid.classList.add('taskListGrid');
        console.log('create tasklist grid');
        return taskListGrid;
    }

    const getGrid = createTaskListGrid();
    
    const display = ()=> {
        document.querySelector('main').appendChild(getGrid);
    }

    return {
        display,
        getGrid,
        createTaskListGrid
    }
})()

const TaskListHeaders = (()=> {
    const headers = ['title', 'description', 'due date', 'category'];

    const createDOMHeaders = ()=> {
        const headerDOMElements = headers.map(header => {
             const headerDOM = document.createElement('h4');
             headerDOM.textContent = header;
             return headerDOM;
        })
        return headerDOMElements
    };

    const getDOMHeaders = createDOMHeaders();

    return {
        getDOMHeaders
    }
})()

export const TaskListAddBTn = (()=> {
    const createTaskListAddBtn = ()=> {
        const addBtn = document.createElement('div');
        addBtn.classList.add('addBtn');
        addBtn.textContent = 'Add a task';
        return addBtn;
    }

    const getAddBtn = createTaskListAddBtn();

    return {
        getAddBtn
    }
})();

export const FillTaskListGrid = (() => {
    
    const displayHeaders = () => {
        TaskListHeaders.getDOMHeaders.forEach(header => TaskListGrid.getGrid.appendChild(header));
    }

    const displayAddBtn = ()=> {
        TaskListGrid.getGrid.appendChild(TaskListAddBTn.getAddBtn)  ;
    }

    const displayNewTask = ()=> {
        const newTask = TaskList.addTask();
        for (const detail in newTask){
            const detailToDisplay = document.createElement('p');
            detailToDisplay.textContent = newTask[detail];
            TaskListGrid.getGrid.appendChild(detailToDisplay);
        } 
    }

    const fill = ()=> {
        displayHeaders();
        displayAddBtn()
    }

    return {
        fill,
        displayNewTask
    }
})()

export const FullTaskBoardDisplay = ()=> {
    return  Object.assign({},
        TaskBoardTitle.display(),
        TaskListGrid.display(),
        FillTaskListGrid.fill()
        )
}