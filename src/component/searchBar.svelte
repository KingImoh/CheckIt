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

<div class="navbar text-[#ff3e00] bg-[#2b2c2e] rounded-full ">
  <label class="input-group border-[#ff3e00]">
    <span class=" text-2xl bg-inherit">
      <ion-icon name="search-outline" />
    </span>
    <input
      type="text"
      placeholder="Search"
      class="input text-lg bg-transparent border-x-[#ff3e00] border-none focus:outline-none"
      bind:value={toDoSearch}
      on:keydown={searchToDo}
    />
    <span class="px-2 text-lg bg-inherit"> {doneListCount}/{listCount} </span>
  </label>
</div>
