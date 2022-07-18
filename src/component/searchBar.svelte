<script lang="ts">
  import { theList } from "../store/list";
  import toDoAPI from "../api/toDoAPI";

  $: listCount = $theList.length;
  $: doneListCount = $theList.filter((toDo) => toDo.done).length;
  let toDoSearch: string = "";

  function searchToDo() {
    if (toDoSearch.length > 2) {
      $theList = $theList.filter((toDo) =>
        toDo.text.toLowerCase().includes(toDoSearch.toLowerCase())
      );
      return true;
    } else {
      theList.set(JSON.parse(localStorage.getItem("toDo")));
    }
  }
</script>

<div>
  <ion-icon name="search-outline" />
  <input type="text" bind:value={toDoSearch} on:keydown={searchToDo} />
  <span>{doneListCount}/{listCount}</span>
</div>

<style>
  ion-icon {
    font-size: 1.55rem;
    color: #ff3e00;
  }

  input {
    line-height: 1.5rem;
    font-size: 1.5rem;
    width: inherit;
    background-color: transparent;
    border: 0;
    color: beige;
    padding-left: 0.5rem;
  }
  input:focus {
    outline: none;
  }
  div {
    text-align: center;
    border-radius: 1.25rem;
    background-color: #2b2c2e;
    margin-top: 3rem;
    width: 85%;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    color: #ff3e00;
    font-weight: bold;
  }
</style>
