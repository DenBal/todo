<template>
  <div id="new-todo" class="new-todo">
    <input class="new-todo__text"
           :value="newTodo"
           @change="getTodo"
           placeholder="Новое задание" />

    <button class="new-todo__btn" @click="addTodo">
      Добавить
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      getTodo(e) {
        this.$store.dispatch('getTodo', e.target.value)
      },
      addTodo() {
        this.$store.dispatch('addTodo');
        this.$store.dispatch('clearTodo');
      }
    },
    computed: {
      newTodo() {
        return this.$store.getters.newTodo
      }
    }
  }
</script>
