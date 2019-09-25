<template>
  <div id="new-todo" class="new-todo">
    <textarea class="new-todo__text"
           :value="newTodo"
           @change="getTodo"
           placeholder="Новое задание" >
    </textarea>

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

<style lang="scss">
   .new-todo {
     &__text {
       width: 100%;
       box-sizing: border-box;
       background: #fff;
       padding: 10px 20px;
       color: #202020;
       font-family: 'Roboto';
       font-size: 1rem;
       font-weight: 300;
       border: 0;
       border-radius: 3px;
       height: 100px;
       overflow: hidden;
       margin-bottom: 15px;

       &::-webkit-input-placeholder {
         color: #999;
       }

       &:active,
       &:focus {
         outline: none;
       }
     }

     &__btn {
       width: 100px;
       height: 40px;
       line-height: 38px;
       text-align: center;
       color: #fff;
       font-size: 1rem;
       font-weight: 300;
       background-color: #8fbc8f;
       border: 0;
       border-bottom: 2px solid #6a8a6a;
       border-right: 2px solid #6a8a6a;
       border-radius: 3px;

       &:active,
       &:focus {
         outline: none;
       }
     }
   }
</style>
