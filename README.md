# to_do_list

## Live version

https://jeannepietropaoli.github.io/to_do_list/

## Description

Project inside the Odin Project's Full Stack JavaScript course.

To learn more about The Odin Project : https://www.theodinproject.com/

To learn more about the specific exercise : https://www.theodinproject.com/lessons/node-path-javascript-todo-list

The goal of this project is to create a dynamic to-do list app.

## Skills to practice

- Using factories or classes to dynamically create tasks objects
- Discovering and using a module bundler : webpack 
- Try to separate the application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff by creating their own modules
- Using the Web Storage API, in particular localStorage, to add some persistence to this todo app when the user refreshes the page

## Features
- Create a project and its own to-do list
- Switch between projects
- Create a task inside of a specific project
- Each task has a title, description, dueDate and priority (depending on the current date)
- Tasks can be edited and deleted
- Tasks have visual cues about their priority and status
- Save in localStorage the projects and to-do lists of the user

## Improvements

As a first bigger scale project and a first time using webpack for this kind of project, the code would need lots of improvments to be clean. My code is very tightly coupled and hard to debug. Good first experience with webpack but got a bit overwhelmed.

- Breaking code into smaller purer functions.
- Organizing my assets into a folder of its own
- TDD from the start could have been a good way of splitting the tasks of this project into small, easily solvable chunks and not get overwhelmed by the complexity and bugs
