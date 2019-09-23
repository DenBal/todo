<template>
    <div id="all-todo" class="all-todo">
        <div class="all-todo__container">
            <div class="all-todo__item" v-for="todo in todos">
                <button @click="complete(todo)"
                        class="all-todo__item-complete">
                        Complete
                </button>
                {{todo.body}}
                <div class="all-todo__item-btns">
                    <button @click="edit(todo)"
                            class="todo-edit">
                            Edit
                    </button>

                    <button @click="remove(todo)"
                            class="todo-remove">
                            Remove
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    methods: {
      complete(todo) {
        this.$store.dispatch('completeTodo', todo)
      },
      edit(todo) {
        this.$store.dispatch('editTodo', todo)
      },
      remove(todo) {
        this.$store.dispatch('removeTodo', todo)
      }
    },
    computed: {
      todos() {
        retirn this.$store.getetrs.todos
      }
    }
  }
</script>
