import { writable } from "svelte/store";

export const theList = writable([]);

// const theList = writable([
//   {
//     id: 0,
//     text: "Yes",
//     done: false,
//   },
//   {
//     id: 1,
//     text: "Yes again",
//     done: true,
//   },
// ]);

// const list = {
//   subscribe: theList.subscribe,
//   addToDo(newToDo) {
//     theList.update((toDos) => {
//       return [...toDos, newToDo];
//     });
//   },
//   nextId(theList) {
//     return theList.length + 1;
//   },
// };
