import { writable } from "svelte/store";
import { localStorageStore } from "./localStorage";

export type Item = {
  id: string;
  text: string;
  done: boolean;
};

export const theList = localStorageStore<Item[]>("toDo", []);
export const mySearch = writable<Item[]>([]);
