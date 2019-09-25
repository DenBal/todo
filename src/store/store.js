import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { "body": "Задача 1", "id": 1 },
      { "body": "Задача 2", "id": 2 },
      { "body": "Задача 3", "id": 3 },
      { "body": "Задача 4", "id": 4 },
      { "body": "Задача 5", "id": 5 },
      { "body": "Задача 6", "id": 6 },
      { "body": "Задача 7", "id": 7 },
      { "body": "Задача 8", "id": 8 },
      { "body": "Задача 9", "id": 9 },
      { "body": "Задача 10", "id": 10 },
      { "body": "Задача 11", "id": 11 },
      { "body": "Задача 12", "id": 12 },
      { "body": "Задача 13", "id": 13 },
      { "body": "Задача 14", "id": 14 },
      { "body": "Задача 15", "id": 15 },
      { "body": "Задача 16", "id": 16 },
      { "body": "Задача 17", "id": 17 },
      { "body": "Задача 18", "id": 18 },
      { "body": "Задача 19", "id": 19 },
      { "body": "Задача 20", "id": 20 },
      { "body": "Задача 21", "id": 21 },
      { "body": "Задача 22", "id": 22 },
      { "body": "Задача 23", "id": 23 }
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
