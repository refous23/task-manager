import { appState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

export class TasksController {

  constructor() {
  }

  createTask(listId) {
    try {
      window.event.preventDefault()

      let form = window.event.target
      let formData = getFormData(form)
      formData.listId = listId
      console.log('does this work?', formData);
      tasksService.createTask(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[CREATE_TASK]', error);
    }
  }

  removeItem(id) {
    if (window.confirm('Remove item?')) {
      tasksService.removeTask(id)
    }
  }
}