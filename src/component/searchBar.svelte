<script lang="ts">
  import { mySearch, theList } from "../store/list";

  $: listCount = $theList.length;
  $: doneListCount = $theList.filter((toDo) => toDo.done).length;
  let toDoSearch: string = "";

  function searchToDo() {
    if (toDoSearch.length >= 2) {
      $mySearch = $theList.filter((toDo) =>
        toDo.text.toLowerCase().includes(toDoSearch.toLowerCase())
      );
      return true;
    } else {
      $mySearch = $theList;
    }
  }
</script>

<div class="navbar text-[#ff3e00] bg-[#2b2c2e] rounded-full ">
  <label class="input-group border-[#ff3e00]">
    <span class=" text-2xl bg-inherit w-2/12">
      <ion-icon name="search-outline" />
    </span>
    <input
      type="text"
      placeholder="Search"
      class="input text-lg bg-transparent border-x-[#ff3e00] border-none focus:outline-none w-8/12"
      bind:value={toDoSearch}
      on:keyup={searchToDo}
    />
    <span class="px-2 text-lg bg-inherit w-2/12">
      {doneListCount}/{listCount}
    </span>
  </label>
</div>

<!-- <div class="alert shadow-lg">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="stroke-info flex-shrink-0 w-6 h-6"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >
    <span>12 unread messages. Tap to see.</span>
  </div>
</div> -->
