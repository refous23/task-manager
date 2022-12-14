import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor(data) {
    this.id = data.id || generateId()

    this.listId = data.listId
    this.name = data.name

  }

  get Template() {
    return/*html*/`
    <li class="d-flex justify-content-between list-group-item">
      <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
  </div>
      <span>${this.name}</span>
      <i onclick="app.tasksController.removeItem('${this.id}')" class="mdi mdi-delete-outline text-danger selectable rounded"  title="Remove Task"></i>
    </li>
    `

  }
}