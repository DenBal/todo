<template>
  <div id="app">
    <AllTodo></AllTodo>
    <NewTodo></NewTodo>
    <CompleteTodo></CompleteTodo>
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
