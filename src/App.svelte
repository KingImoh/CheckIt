<script lang="ts">
  import "./app.css";
  import SearchBar from "./component/searchBar.svelte";
  import NavBar from "./component/navBar.svelte";
  import ToDo from "./component/toDo.svelte";
</script>

<main>
  <div class="container mx-auto p-[5%]">
    <SearchBar />

    <ToDo />
  </div>
  <NavBar />
</main>
