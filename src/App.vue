<template>
  <div id="app" class="todo">
    <div class="todo__block">
      <div class="todo__block-navigation">
        <div>Задания</div>
        <div>Выполненные</div>
      </div>
      <NewTodo></NewTodo>
      <AllTodo></AllTodo>
      <CompleteTodo></CompleteTodo>
    </div>
  </div>
</template>

<script>
import NewTodo from './components/NewTodo.vue'
import AllTodo from './components/AllTodo.vue'
import CompleteTodo from './components/CompleteTodo.vue'

export default {
  components: {
    NewTodo,
    AllTodo,
    CompleteTodo
  }
}
</script>

<style>
  .todo {
    width: 100%;
    height: 100%;
    padding: 70px 0;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    justify-content: center;
    -webkit-justify-content: center;
    aloign-items: center;
    -webkit-align-items: center;
  }

  .todo__block {
    width: 60%;
    max-width: 750px;
    background: #e2e2e2;
    border-radius: 5px;
    padding: 20px;
  }

  .todo__block-navigation {
    display: flex;
    display: -webkit-flex;
  }
</style>


