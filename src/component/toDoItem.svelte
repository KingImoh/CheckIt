<script lang="ts">
  export let id: string;
  export let text: string;
  export let done: boolean;

  import { theList } from "../store/list";
  import { fly, fade } from "svelte/transition";
  function deleteToDo(toDoID: string) {
    $theList = $theList.filter((toDo) => toDo.id !== toDoID);
  }

  function updateToDo(toDoID: string, toDoStatus = false) {
    $theList = $theList.map((toDo) =>
      toDo.id === toDoID ? { ...toDo, text, done: toDoStatus } : toDo
    );
  }
</script>

<div
  class="rounded-2xl p-2 m-4 border-2 border-primary-focus mx-auto"
  transition:fly={{ y: 200, duration: 700 }}
>
  <span class="bg-inherit justify-start">
    <input
      type="checkbox"
      class=" radio radio-primary"
      class:done
      bind:checked={done}
      on:click={() => updateToDo(id, !done)}
    />
  </span>
  <input
    type="text"
    bind:value={text}
    class="input w-4/5 text-xl bg-transparent border-none justify-center focus:outline-none"
    class:done
    on:keyup={({ key }) => key === "Enter" && updateToDo(id)}
    readonly={done}
  />
  <span
    class="text-primary text-2xl bg-inherit"
    on:click={() => deleteToDo(id)}
  >
    <ion-icon name="close-outline" />
  </span>
</div>

<style>
  .done {
    text-decoration: line-through;
    color: #ff3e00;
  }
</style>
