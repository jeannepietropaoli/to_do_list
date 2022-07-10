export class Task {
    constructor(title, description, dueDate, category) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._category = category;
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
        return this._dueDate
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
}

export const TaskList = (()=> {
    const list = [];

    const getList = ()=> {
        return list;
    }

    const addTask = (title, description, dueDate, category)=> {
        /*const details = [];
        arguments.forEach(detail => {
            const input = prompt(`Task ${detail} ?`);
            details.push(input);
        }) */
        const newTask = new Task(prompt('title please ?'), prompt('description please ?'), prompt('due date please ?'), prompt('category please ?'));
        list.push(newTask);
        return newTask;
    }

    const deleteTask = (task) => {
        list.splice(list.indexOf(task),1);
    }

    return {
        getList,
        addTask,
        deleteTask
    }
})()



