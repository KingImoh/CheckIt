<script lang="ts">
  import { onMount } from "svelte";

  import { theList } from "../store/list";

  import toDoAPI from "../api/toDoAPI";
  let newToDo = "";

  // function addToDo() {
  //   ToDoList.addToDo({
  //     id: ToDoList.length,
  //     text: newToDoItem,
  //     done: false,
  //   });

  //   newToDoItem = "";
  // }

  onMount(async () => {
    const data = (await toDoAPI.getToDoList()) || [];
    theList.set(data);
  });

  function deleteToDo(toDoID) {
    $theList = $theList.filter((toDo) => toDo.id !== toDoID);
    toDoAPI.save($theList);
  }

  function addToDo() {
    if (newToDo != "") {
      $theList?.push({
        id: $theList.length,
        text: newToDo,
        done: false,
      });

      $theList = $theList;
      newToDo = "";
      toDoAPI.save($theList);
    }
  }

  function updateToDo(toDoID, toDoItem, toDoStatus = false) {
    $theList = $theList.map((toDo) =>
      toDo.id === toDoID ? { ...toDo, text: toDoItem, done: toDoStatus } : toDo
    );
    toDoAPI.save($theList);
  }
</script>

<div class="bodyCon">
  <div class="item">
    <input
      type="text"
      bind:value={newToDo}
      on:keyup={({ key, target }) => key === "Enter" && addToDo()}
    />

    <!-- on:click={addToDo()} -->
    <div class="btn" on:click={addToDo}>
      <ion-icon name="add-outline" />
    </div>
  </div>

  <div id="list">
    {#each $theList as item (item.id)}
      <div class="item {item.done ? 'done' : ''}">
        <div class="left">
          <input
            type="checkbox"
            bind:checked={item.done}
            on:click={() => updateToDo(item.id, item.text, true)}
          />
          <input
            type="text"
            bind:value={item.text}
            readonly={item.done}
            on:keyup={({ key }) =>
              key === "Enter" && updateToDo(item.id, item.text)}
          />
        </div>

        <span class="delete" on:click={() => deleteToDo(item.id)}
          ><ion-icon name="close-outline" /></span
        >
      </div>
    {:else}
      <div class="item">Nothing to see here</div>
    {/each}

    <!-- {#each $theList.filter((toDo) => toDo.done) as item (item.id)}
      <div class="item {item.done ? 'done' : ''}">
        <div class="left">
          <input type="checkbox" bind:checked={item.done} />
          <input
            type="text"
            bind:value={item.text}
            readonly={item.done}
            on:keyup={({ key }) =>
              key === "Enter" && updateToDo(item.id, item.text)}
          />
        </div>

        <span class="delete" on:click={() => deleteToDo(item.id)}
          ><ion-icon name="close-outline" /></span
        >
      </div>
    {/each} -->

    <br /><br /><br />
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
    /* border-radius: 1.25rem;
    border: 1px solid #ff3e00; */
  }
  .item {
    display: flex;
    border: 1px solid grey;
    padding: 1rem;
    border-radius: 1.25rem;
    margin-bottom: 1rem;
    justify-content: space-between;
  }
  .item.done {
    /* text-decoration: line-through; */
    border: 1px solid #ff3e00;
    color: #ff3e00;
  }
  .item.done input {
    /* text-decoration: line-through; */
    /* border: 1px solid #ff3e00; */
    color: #ff3e00;
  }
  .left {
    width: 95%;
  }
  input[type="text"] {
    font-size: 1.25rem;
    margin-left: 0.5rem;
    /* padding-bottom: 1rem; */
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

  /* input[type="checkbox"] {
    display: inline-flex;
    cursor: pointer;
    position: relative;
  } */

  input[type="checkbox"] {
    color: #ff3e00;
    height: 1rem;
    width: 1rem;
    appearance: none;
    border: 1px solid #ff3e00;
    /* border-radius: 3rem; */
    outline: none;
    transition-duration: 0.3s;
    /* background-color: beige; */
    cursor: pointer;
  }

  input[type="checkbox"]:checked {
    background-color: #ff3e00;
  }
</style>
