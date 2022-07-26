export class Project {
    constructor(title) {
        this._title = title;
    }
    
    get title() {
        return this._title
    }

    set title(value) {
        this._title = value;
    }
}

export const ProjectList = (()=> {
    const list = [];

    const getList = ()=> {
        return list;
    }

    const addProject = (newProject)=> {
        list.push(newProject);
    }

    const deleteProject = (projectIndex) => {
        list.splice(projectIndex , 1);
    }

    return {
        getList,
        addProject,
        deleteProject
    }
})()



