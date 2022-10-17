/*
creer projectBoard (divisé en plusieurs parties: 
     -titre 'Project Board
     -en tetes : project, due date, description, number of tasks)
     - bouton add (sous la forme d une case identiaue au projet mais en pointillé
    - les projets listés les uns en dessous des autres avec chacun leurs infos)

display projectBoard in the main section
display tous les projets en cours
add a project  (project title, due date, description, number of tasks)
delete a project (from the list and the sidebar, le faire dynamiqt)
onclick go into the project's tasks
lier pour faire apparaitre les projets dans la sidebar

commencer par le template ou besoin (liste des fonctionalites a implementer)
separer dom (juste prendre des donnees et les afficher) de la logiaue des fonctionalites

template: 
fonctionnalités
*/

/* It means a single responsibility in the scope of a matter.

Persistence operations makes part of the same matter.  */

/*
***************************************
***************************************
            Logique métier :
***************************************
***************************************
- attribut
* méthode 

- ProjectBoard :
    - title
    - project list
- ProjectList (extends List abstract)=
    - project list
    * add project
    * delete project
    * edit project   doit faire le lien avec la methode du projet en question, c est cette methode la qui vq se charger de faire le travail
- List abstract class
- Project :
     - ProjectHeader  (getter setter pr y faire appel ds project display)
     - description v (collapse)
     - task list
    * edit project
- TaskList (extends List abstract) :
    - task list
    * add task
    * delete task
    * edit task
- Task =
    - TaskHeader
    - description
- BaseHeader 
    - title, due date
- ProjectHeader extends BaseHeader
    - number of tasks, category
- TaskHeader extends BaseHeader
    - status, priorty

***************************************
***************************************
            Logique d'affichage :
***************************************
***************************************
html : mettre en place les div contenant pour les sections dynamiques
- Sidebar project list
- ProjectBoard page :
    - click on project -> go to project page (read mode)
    - click on add button -> modal
    - click on delete button 
    - click on edit button -> go to project page (edit mode)
- Project page :
    - click on short description -> see all description
    - edit button -> project page (edit mode)
    - edit mode : save / cancel button -> go to project page (read mode)
    - click on add button -> modale
    - delete task
    - edit task -> edit all fields 
    - edit mode : save / cancel button -> back to read mode
- ProjectHeader 
- TaskHeader

*/




const projectBoardGridHeaders = ()=> {
    const headers = ['Project', 'Due date', 'Description', 'Number of tasks'];
    headers.forEach(header => grid. )
    return {}
}

const projectBoardDisplay = ()=> {

}

