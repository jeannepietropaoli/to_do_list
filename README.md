# to_do_list

https://jeannepietropaoli.github.io/to_do_list/

The goal of this project is to create a to-do list app.

‘todos’ must be dynamically created objects, using either factories or constructors/classes to generate them.

todo-items are going to have a title, description, dueDate and priority and an edit and delete functions.

The app should have projects that can also be dynamically created and each project should have its own to-do list.

With this app we should try to separate the application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff. We have to keep all of those things in separate modules.

As I am already using webpack, a good practice would also be to add an external library such as date-fns for formatting and manipulating dates and times.

Finally the goal is to add some persistence to this todo app when the user refreshes the page, using the Web Storage API, in particular localStorage.
