<script lang="ts">
  import { mySearch, theList } from "../store/list";
  import ToDoItem from "./toDoItem.svelte";
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

<div class="bodyCon">
  <div class="item">
    <input
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

  <div id="list" class="pr-10">
    {#each pendingTodos as item (item.id)}
      <ToDoItem {...item} />
    {:else}
      {#if doneTodos.length > 0}
        <div class="item">You've done everything</div>
      {:else}
        <div class="item">Nothing to see here</div>
      {/if}
    {/each}

    <div class="mt-32 pb-32">
      <div
        class="text-2xl uppercase justify-self-center flex justify-center italic"
      >
        done
      </div>
      {#each doneTodos as item (item.id)}
        <ToDoItem {...item} />
      {/each}
    </div>
  </div>
</div>

<style>
  .bodyCon {
    padding: 1rem;

    max-width: 1000px;
    margin: 0 auto;
  }

  #list {
    height: 80vh;
    overflow-y: scroll;
    padding-right: 0.75rem;
  }
  .done {
    text-decoration: line-through;
  }
  .item {
    display: flex;
    border: 1px solid grey;
    padding: 1rem;
    border-radius: 1.25rem;
    margin-bottom: 1rem;
    justify-content: space-between;
  }

  input[type="text"] {
    font-size: 1.25rem;
    margin-left: 0.5rem;
    background: 0;
    outline: 0;
    border: 0;
    color: beige;
    display: inline;
    width: 85%;
  }
  ion-icon {
    font-size: 1.55rem;
    color: #ff3e00;
  }
</style>
