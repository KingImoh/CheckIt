<script lang="ts">
  import "./app.css";
  import SearchBar from "./component/searchBar.svelte";
  import NavBar from "./component/navBar.svelte";
  import ToDo from "./component/toDo.svelte";
</script>

<main>
  <SearchBar />

  <ToDo />

  <NavBar />
</main>

<style>
  main {
    min-height: 100vh;
  }
</style>
