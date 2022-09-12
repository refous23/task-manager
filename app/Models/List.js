import { generateId } from "../Utils/generateId.js"
import { appState } from "../AppState.js"

export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
  }


  get Template() {
    return /*html*/`
    <div class="col-3 text-center post-it elevation-5 m-5">
      <i onclick="app.itemsController.removeItem('${this.id}')" class="mdi mdi-close text-danger selectable rounded"  title="Remove list"></i>
      <div>
        <img src="https://www.pngall.com/wp-content/uploads/2/ThumbTack-PNG-Free-Download.png" width="80" height="80" alt="" class="text-center">
      </div>
      <h1 class="border-bottom border-dark">${this.name}</h1>
      <ul class="list-group elevation-2 mb-3">
        ${this.TaskTemplates}
      </ul>

      <form class="bg-secondary rounded p-1" onsubmit="app.tasksController.createTask('${this.id}')">
        <div class="d-flex w-100 ">
          <div class="flex-grow-1">
            <input class="form-control square-right" type="text" required minlength="2" name="name" placeholder="Task Name..."/>
            <label for="name" class="visually-hidden">Name</label>
          </div>
          <button type="submit" class="btn btn-secondary square-left" title="Add Item">
            <b><i class="mdi mdi-plus-circle-outline text-dark"></i></b>
          </button>
        </div>
      </form>
      <h4 class="text-start">Total Tasks: ${this.Tasks.length}</h4>
    </div>
    `
  }

  get TaskTemplates() {
    let template = ''
    this.Tasks.forEach(task => template += task.Template)
    return template
  }

  get Tasks() {
    let tasks = appState.tasks.filter(task => task.listId == this.id)
    return tasks
  }

}
