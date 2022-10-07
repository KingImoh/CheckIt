<script>
  import toDoAPI from "../api/toDoAPI.js";
  import { theList } from "../store/list";

  function clearToDoList() {
    alert("Are you sure you want to clear the list?");
    localStorage.removeItem("toDo");
    theList.set([]);
  }
</script>

<div class="bottom-2 absolute justify-around navbar mx-auto ">
  <div class="btn " on:click={clearToDoList}>
    <ion-icon name="trash-outline" />
  </div>

  <!-- <div class="con"> -->
  <!-- <div class="btn"><ion-icon name="list-outline" /></div>
  <div class="btn"><ion-icon name="checkmark-done-outline" /></div> -->
  <!--</div>
  <div class="btn" on:click={newTodo}>
    <ion-icon name="add-outline" />
  </div> -->
</div>

<style>
  .nav {
    /* display: flex; */
    /* position: fixed; */
    justify-content: space-around;
    bottom: 10px;
    border-radius: 1.25rem;
    padding: 0.51rem;
    margin: 0 auto;
    background-color: aqua;
    /* width: calc(100% - 50px); */

    /*  */
  }
  .con {
    background-color: #2b2c2e;
    width: 60%;
    padding: 0.75rem;
    border-radius: 1rem;
    display: inline-flex;
    justify-content: space-around;
    display: none;
  }

  .btn {
    background-color: #2b2c2e;
    padding: 0.75rem;
    border-radius: 1rem;
  }
  ion-icon {
    font-size: 1.55rem;
    color: #ff3e00;
  }
</style>
