import { isAfter, isBefore, isSameDay, parseISO } from "date-fns"
import { populateTaskListStorage } from "../index";

export class Task {

    constructor(title, description, dueDate, category, state) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._category = category;
        this._state = state;
    }
    
    get title() {
        return this._title
    }

    set title(value) {
        this._title = value;
    }

    get description() {
        return this._description
    }

    set description(value) {
        this._description = value;
    }

    get dueDate() {
        return parseISO(this._dueDate);
    }

    set dueDate(value) {
        this._dueDate = value;
    }

    get category() {
        return this._category
    }

    set category(value) {
        this._category = value;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    get priority() {
        let today = new Date();
        if (isSameDay(this.dueDate, today)) {
            return 'dueToday';
        }
        if (isAfter(today, this.dueDate)) {
            return 'late';
        }
        if (isBefore(today, this.dueDate)) {
            return 'onTime';
        }
    }
}

export const TaskList = ()=> {
    const list = [];

    const getList = ()=> {
        return list;
    }

    const addTask = (newTask)=> {
        list.push(newTask);
        populateTaskListStorage();
    }

    const deleteTask = (taskIndex) => {
        list.splice(taskIndex , 1);
        populateTaskListStorage();
    }

    const editTask = (taskIndex, editedTask) => {
        list.splice(taskIndex, 1, editedTask);
        populateTaskListStorage();
    }

    const printList = ()=> {
        console.log(list);
    }

    return {
        getList,
        addTask,
        deleteTask, 
        editTask,
        printList
    }
}



