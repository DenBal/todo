<template>
    <div id="completed-todos" class="todos-list">
       <div class="todos-list__item" v-for="todo in completed" v-bind:key="todo.body">
          {{todo.body}}
          <div class="todos-list__item-btns">
              <button @click="remove(todo)"
                      class="todo-remove">
                  Удалить
              </button>
          </div>
       </div>
    </div>
</template>

<script>
  export default {
    methods: {
      remove(todo) {
        this.$store.dispatch('removeTodo', todo)
      }
    },
    computed: {
      completed() {
        return this.$store.getters.completedTodos
      }
    }
  }
</script>
