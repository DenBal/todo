import Vue from 'vue'
import Router from 'vue-router'
import AllTodo from '../components/AllTodo.vue'
import CompleteTodo from '../components/CompleteTodo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: AllTodo
    },
    {
      path: '/completed',
      component: CompleteTodo
    }
  ]
})
