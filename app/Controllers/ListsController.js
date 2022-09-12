import { appState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function _drawLists() {
  let template = ''
  appState.lists.forEach(list => template += list.Template)
  setHTML('lists', template)
}
export class ListsController {
  constructor() {
    appState.on('lists', _drawLists)
    appState.on('tasks', _drawLists)
    _drawLists()
  }

  createList() {
    try {
      // @ts-ignore
      window.event?.preventDefault()
      // @ts-ignore
      const form = window.event?.target
      let formData = getFormData(form)

      // @ts-ignore
      listsService.createList(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[CREATE_LIST]', error);
    }
  }

  removeList(id) {
    if (window.confirm('Do you want to delete list?')) {
      listsService.removeList(id)
    }
  }
}