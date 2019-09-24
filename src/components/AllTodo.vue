<template>
    <div id="all-todo" class="todos-list">
        <div class="todos-list__container">
            <div class="todos-list__item" v-for="(todo, index) in displayedTodos" v-bind:key="todo.body">

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

        <nav>
            <ul class="todos-list__pagination">
                <li class="page-item">
                    <button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
                </li>
                <li class="page-item">
                    <button type="button" class="page-link" v-for="pageNumber in pages" @click="page = pageNumber"> {{pageNumber}} </button>
                </li>
                <li class="page-item">
                    <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        pages: [],
        page: 1,
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
      setPages() {
        let numberOfPages = Math.ceil(this.todos.length / this.perPage);
        for (let index = 1; index <= numberOfPages; index++) {
          this.pages.push(index);
        }
      },
      paginate(todos) {
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return  todos.slice(from, to);
      }
    },
    computed: {
      displayedTodos() {
        return this.paginate(this.$store.getters.todos)
      }
    },
    watch: {
      tasks() {
        return this.setPages();
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
        justify-content: space-between;
        -webkit-justify-content: space-between;
    }

    .todos-list__item-btns button {
      border: 0;
      background: transparent;
      box-shadow: none;
    }

    .todos-list__item-btns button:hover,
    .todos-list__item-btns button:focus,
    .todos-list__item-btns button:active {
      outline: none;
      border: 0;
      cursor: pointer;
    }

    .todos-list__item-btns button:hover .fas,
    .todos-list__item-btns button:focus .fas,
    .todos-list__item-btns button:active .fas {
      color: green;
    }
</style>
