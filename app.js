const path = require('path');
const taskManager = require('./taskManager');
const fileHandler = require('./fileHandler');

const filePath = path.join('tasks.json');

let tasks = fileHandler.loadTasks(filePath);

taskManager.listTasks(tasks);
taskManager.addTask(tasks, "Watch movie");
taskManager.addTask(tasks, "Jump through hoops");
taskManager.listTasks(tasks);

fileHandler.saveTasks(tasks);