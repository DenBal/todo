<template>
  <div id="new-todo" class="new-todo">
      <div class="new-todo__block" v-bind:class="{ active: openTextarea }">
        <textarea class="new-todo__text"
               :value="newTodo"
               v-bind:class="{error: error}"
               @change="getTodo"
               placeholder="Новое задание" >
        </textarea>

        <button class="new-todo__btn" @click="addTodo">
          Добавить
        </button>
      </div>

    <button class="new-todo__btn full-width" @click="show" v-bind:class="{ hide: hideAddBtn }">
      Новое задание
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        openTextarea: false,
        hideAddBtn: false,
        error: false
      }
    },
    methods: {
      getTodo(e) {
        if(e.target.value) {
          this.$store.dispatch('getTodo', e.target.value)
          this.error = false
        } else {
          this.error = true
        }
      },
      addTodo() {
        this.$store.dispatch('addTodo')
        this.$store.dispatch('clearTodo')
        this.openTextarea = false
        this.hideAddBtn = false
      },
      show() {
        this.openTextarea = true
        this.hideAddBtn = true
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

     &__block {
       display: none;

       &.active {
         display: block;
       }
     }

     &__text {
       width: 100%;
       box-sizing: border-box;
       background: #fff;
       padding: 10px 20px;
       color: #202020;
       font-family: 'Roboto';
       font-size: 1rem;
       font-weight: 300;
       border: 1px solid transparent;
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

       &.error {
         border: 1px solid #ff0000;
         transition: all .3s;
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
       transition: all .3s;

       &:active,
       &:focus {
         outline: none;
       }

       &:hover {
         cursor: pointer;
         background: darken(#8fbc8f, 10%);
         transition: all .3s;
       }

       &.hide {
         display: none;
       }

       &.full-width {
         width: auto;
         padding: 0 20px;
       }
     }
   }
</style>
