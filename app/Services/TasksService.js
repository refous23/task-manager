import { appState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/Store.js";

class TasksService {
  removeTask(id) {
    let leftovers = appState.tasks.filter(task => task.id !== id)
    appState.tasks = leftovers
    saveState('tasks', appState.tasks)
  }

  createTask(formData) {
    let task = new Task(formData)
    appState.tasks = [task, ...appState.tasks]
    console.log(appState.tasks);
    saveState('tasks', appState.tasks)
  }


}

export const tasksService = new TasksService()