<template>
  <div id="app">
    <AllTodo></AllTodo>
    <NewTodo></NewTodo>
  </div>
</template>

<script>
import NewTodo from './components/new-todo.vue'
import AllTodo from './components/all-todo.vue'

export default {
  components: {
    NewTodo,
    AllTodo
  }
}
</script>

<style>

</style>
