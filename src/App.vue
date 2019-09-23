<template>
  <div id="app">
    <NewTodo></NewTodo>
    <AllTodo></AllTodo>
  </div>
</template>

<script>
import NewTodo from './components/NewTodo.vue'
import AllTodo from './components/AllTodo.vue'

export default {
  components: {
    NewTodo,
    AllTodo
  }
}
</script>
