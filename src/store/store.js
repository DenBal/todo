import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { "body": "Задача 1" },
      { "body": "Задача 2" },
      { "body": "Задача 3" },
      { "body": "Задача 4" },
      { "body": "Задача 5" },
      { "body": "Задача 6" },
      { "body": "Задача 7" },
      { "body": "Задача 8" },
      { "body": "Задача 9" },
      { "body": "Задача 10" },
      { "body": "Задача 11" },
      { "body": "Задача 12" },
      { "body": "Задача 13" },
      { "body": "Задача 14" },
      { "body": "Задача 15" },
      { "body": "Задача 16" },
      { "body": "Задача 17" },
      { "body": "Задача 18" },
      { "body": "Задача 19" },
      { "body": "Задача 20" },
      { "body": "Задача 21" },
      { "body": "Задача 22" },
      { "body": "Задача 23" }
    ],
    newTodo: ''
  },
  mutations: {
    GET_TODO(state, todo) {
      state.newTodo = todo;
    },
    ADD_TODO(state) {
      state.todos.push({
        body: state.newTodo,
        completed: false
      })
    },
    EDIT_TODO(state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTodo = todo.body
    },
    REMOVE_TODO(state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO(state, todo) {
      todo.completed = !todo.completed
    },
    CLEAR_TODO(state) {
      state.newTodo = ''
    }
  },
  actions: {
    getTodo({commit}, todo) {
      commit('GET_TODO', todo)
    },
    addTodo({commit}) {
      commit('ADD_TODO')
    },
    editTodo({commit}, todo) {
      commit('EDIT_TODO', todo)
    },
    removeTodo({commit}, todo) {
      commit('REMOVE_TODO', todo)
    },
    completeTodo({commit}, todo) {
      commit('COMPLETE_TODO', todo)
    },
    clearTodo({commit}) {
      commit('CLEAR_TODO')
    }
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos.filter((todo) => {return !todo.completed}),
    completedTodos: state => state.todos.filter((todo) => {return todo.completed})
    }
})
