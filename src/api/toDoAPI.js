import { onMount } from "svelte";
import { theList } from "../store/list";

export default class toDoAPI {
  static async getToDoList() {
    return JSON.parse(localStorage.getItem("toDo"));
  }

  static async save(toDos) {
    localStorage.setItem("toDo", JSON.stringify(toDos));
  }

  static search(searchTerm) {
    if (searchTerm <= 1) {
      return JSON.parse(localStorage.getItem("toDo"));
    }
    return JSON.parse(localStorage.getItem("toDo")).include(searchTerm);
  }
}
