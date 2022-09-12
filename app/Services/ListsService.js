import { appState } from "../AppState.js"
import { List } from "../Models/List.js"
import { saveState } from "../Utils/Store.js";

class ListsService {
  removeList(id) {
    let leftovers = appState.lists.filter(list => list.id !== id)
    appState.lists = leftovers
    saveState('lists', appState.lists)
  }

  createList(formData) {
    let list = new List(formData)
    appState.lists = [list, ...appState.lists]
    console.log(appState.lists);
    saveState('lists', appState.lists)
  }
}


export const listsService = new ListsService()