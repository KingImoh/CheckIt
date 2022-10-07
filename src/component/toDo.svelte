<script lang="ts">
  import { mySearch, theList } from "../store/list";
  import ToDoItem from "./toDoItem.svelte";

  import { fly, fade } from "svelte/transition";

  let newToDo = "";

  $: pendingTodos =
    $mySearch.length > 0
      ? $mySearch.filter((toDo) => !toDo.done)
      : $theList.filter((toDo) => !toDo.done);
  $: doneTodos =
    $mySearch.length > 0
      ? $mySearch.filter((toDo) => toDo.done)
      : $theList.filter((toDo) => toDo.done);

  function deleteToDo(toDoID: string) {
    $theList = $theList.filter((toDo) => toDo.id !== toDoID);
  }

  function addToDo() {
    if (newToDo != "") {
      $theList?.push({
        id: crypto.randomUUID(),
        text: newToDo,
        done: false,
      });

      $theList = $theList;
      newToDo = "";
    }
  }
</script>

<div class="container mx-auto p-4 ">
  {#if doneTodos.length && !pendingTodos.length}
    <div
      class="alert shadow-3xl mb-4"
      transition:fly={{ x: -200, duration: 700 }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          /></svg
        >
        <span>You've done everything</span>
      </div>
    </div>
  {/if}

  {#if !doneTodos.length && !pendingTodos.length}
    <div
      class="alert shadow-3xl mb-4"
      transition:fly={{ x: -200, duration: 700 }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-current flex-shrink-0 w-6 h-6"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          /></svg
        >
        <span>Nothing to see here yet</span>
      </div>
    </div>
  {/if}

  <div
    class="flex justify-between items-center mb-4 p-4 border border-[#808080] rounded-[1.25rem]"
  >
    <input
      class="inline-flex text-xl bg-transparent outline-none border-none text-white pl-4 w-2/3"
      type="text"
      placeholder="Add a new todo"
      bind:value={newToDo}
      on:keyup={({ key, target }) => key === "Enter" && addToDo()}
    />

    <!-- on:click={addToDo()} -->
    <div class="btn" on:click={addToDo}>
      <ion-icon name="add-outline" />
    </div>
  </div>

  <div class="mt-8 overflow-y-auto h-[75vh] pr-2">
    {#each pendingTodos as item (item.id)}
      <ToDoItem {...item} />
    {/each}

    {#if doneTodos.length}
      <div class="mt-32 pb-32" transition:fly={{ x: -200, duration: 700 }}>
        <div
          class="text-2xl uppercase justify-self-center flex justify-center italic"
        >
          done
        </div>
        {#each doneTodos as item (item.id)}
          <ToDoItem {...item} />
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  ion-icon {
    font-size: 1.55rem;
    color: #ff3e00;
  }
</style>
