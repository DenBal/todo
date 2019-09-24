<template>
    <div id="all-todo" class="todos-list">
        <div class="todos-list__container">
            <div class="todos-list__item" v-for="todo in todos">
                <button @click="complete(todo)"
                        class="todos-list__item-complete">
                        Complete
                </button>

                {{todo.body}}

                <div class="todos-list__item-btns">
                    <button @click="edit(todo)"
                            class="todo-edit">
                        <i class="fas fa-pencil-alt"></i>
                    </button>

                    <button @click="remove(todo)"
                            class="todo-remove">
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
      todos(){
            return this.$store.getters.todos
        }
    }
  }
</script>

<style>
    .todos-list {
        padding: 20px 0;
    }
    .todos-list__item {
        background: #fff;
        border-radius: 3px;
        border-bottom: 2px solid #999;
        padding: 10px;
        color: #202020;
        font-family: 'Roboto';
        font-weight: 300;
        margin-bottom: 5px;
        transition: all .2s;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
    }

    .todos-list__item-complete {
        width: 15px;
        height: 15px;
        border-radius: 2px;
        border: 1px solid #999;
        font-size: 0px;
        margin-right: 15px;
    }

    .todos-list__item-complete:hover,
    .todos-list__item-complete:focus {
        background: #999;
        cursor: pointer;
        transition: all .2s;
    }
</style>
