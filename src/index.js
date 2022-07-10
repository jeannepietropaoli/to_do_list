import './css/initPageLoad.css';
import { Task, TaskList } from './functionnalities/Task';
import {FullTaskBoardDisplay} from './view  ihm/TaskBoard';
import {TaskListAddBTn} from './view  ihm/TaskBoard';
import {FillTaskListGrid} from './view  ihm/TaskBoard';



FullTaskBoardDisplay();

TaskListAddBTn.getAddBtn.addEventListener('click', ()=> {
    FillTaskListGrid.displayNewTask();
});














