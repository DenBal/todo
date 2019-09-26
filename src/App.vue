<template>
  <div id="app" class="todo">
    <div class="todo__block">
      <div class="todo__block-navigation">
        <router-link to="/">Активные</router-link>
        <router-link to="/completed">Выполненные</router-link>
      </div>
      <div class="todo__block-content">
         <NewTodo></NewTodo>
         <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NewTodo from './components/NewTodo.vue'

export default {
  components: {
    NewTodo
  }
}
</script>

<style lang="scss">
  .todo {
    width: 100%;
    height: 100%;
    padding: 70px 0;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    justify-content: center;
    -webkit-justify-content: center;
    aloign-items: center;
    -webkit-align-items: center;

    &__block {
       width: 98%;
       max-width: 750px;

      &-navigation {
        display: flex;
        display: -webkit-flex;

        a {
          background: #fff;
          padding: 20px;
          color: #e2e2e2;
          font-size: 1.25rem;
          text-decoration: none;
          border-top: 2px solid #f0f0f0;
          border-right: 1px solid #f0f0f0;
          border-left: 1px solid #f0f0f0;
          font-family: 'Roboto';
          font-weight: 300;
          transition: all .3s;

          &.router-link-exact-active {
            background: #e2e2e2;
            border: 0;
            border-top: 2px solid #999;
            color: #202020;

            &:hover,
            &:focus {
              color: #202020;
              border-right: 1px solid #f0f0f0;
              border-left: 1px solid #f0f0f0;
              transition: all .3s;
            }
          }

          &:hover,
          &:focus {
            color: #999;
            border-top: 2px solid #999;
            border-right: 1px solid #999;
            border-left: 1px solid #999;
            transition: all .3s;
          }
        }
      }

      &-content {
        background: #e2e2e2;
        padding: 20px;
        min-height: 600px;
        position: relative;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
      }
    }
  }
</style>
