<template>
    <div id="all-todo" class="todos-list">
        <div class="todos-list__container">
            <div class="todos-list__item" v-for="(todo, index) in displayedTodos" :key="todo.body">

                {{ index + 1}}) {{ todo.body }}

                <div class="todos-list__item-btns">
                    <button @click="complete(todo)"
                          class="todos-list__item-complete">
                          <i class="fas fa-check"></i>
                    </button>

                    <button @click="edit(todo)"
                            class="todo-edit">
                            <i class="fas fa-pencil-alt"></i>
                    </button>

                    <button @click="remove(todo)"
                            class="todo-remove">
                            <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="todos-list__pages">
            <button type="button" class="page-link" v-for="pageNumber in pages" :key="pageNumber" @click="currentPage = pageNumber">
              {{pageNumber}}
            </button>
        </div>
    </div>
</template>

<script>
  import _ from 'lodash'
  export default {
    data() {
      return {
        pages: [],
        currentPage: 1,
        perPage: 10
      }
    },
    methods: {
      complete(todo) {
        this.$store.dispatch('completeTodo', todo)
      },
      edit(todo) {
        this.$store.dispatch('editTodo', todo)
      },
      remove(todo) {
        this.$store.dispatch('removeTodo', todo)
      },
      paginate(todos) {
        let currentPage = this.currentPage
        let perPage = this.perPage
        let from = (currentPage * perPage) - perPage
        let to = (currentPage * perPage)
        return  todos.slice(from, to)
      },
      setPages() {
        let numberOfPages = Math.ceil(this.todos.length / this.perPage)
        for (let index = 1; index <= numberOfPages; index++) {
          this.pages.push(index)
        }
      },
    },
    computed: {
      todos() {
        return this.$store.getters.todos
      },
      displayedTodos() {
        let tasksOnPage = this.$store.getters.todos
        tasksOnPage = _.orderBy(tasksOnPage, 'id', 'desc');
        return this.paginate(tasksOnPage)
      }
    },
    created() {
      this.setPages()
    }
  }
</script>

<style lang="scss">
    .todos-list {
        padding: 20px 0 40px 0;
        height: 100%;

        &__item {
            background: #fff;
            border-radius: 3px;
            border-bottom: 2px solid #999;
            border-right: 2px solid #999;
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
            justify-content: space-between;
            -webkit-justify-content: space-between;

            &-btns {
              button {
                border: 0;
                background: transparent;
                box-shadow: none;

                &:hover,
                &:focus,
                &:active {
                  outline: none;
                  border: 0;
                  cursor: pointer;

                  .fas {
                    color: green;
                  }
                }
              }
            }
        }

        &__pages {
          position: absolute;
          width: 100%;
          bottom: 20px;
          display: flex;
          display: -webkit-flex;
          justify-content: center;
          -webkit-justify-content: center;
          align-items: center;
          -webkit-align-items: center;

          button {
            background: #fff;
            padding: 7px 14px;
            border-radius: 3px;
            border: 0;
            border-bottom: 2px solid #999;
            border-right: 2px solid #999;
            margin: 0 5px;
          }
        }
    }
</style>
