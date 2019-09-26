import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { "body": "Задача 1", "id": 1, "completed": false },
      { "body": "Задача 2", "id": 2, "completed": false },
      { "body": "Задача 3", "id": 3, "completed": false },
      { "body": "Задача 4", "id": 4, "completed": false },
      { "body": "Задача 5", "id": 5, "completed": false },
      { "body": "Задача 6", "id": 6, "completed": false },
      { "body": "Задача 7", "id": 7, "completed": false },
      { "body": "Задача 8", "id": 8, "completed": false },
      { "body": "Задача 9", "id": 9, "completed": false },
      { "body": "Задача 10", "id": 10, "completed": false },
      { "body": "Задача 11", "id": 11, "completed": false },
      { "body": "Задача 12", "id": 12, "completed": false },
      { "body": "Задача 13", "id": 13, "completed": false },
      { "body": "Задача 14", "id": 14, "completed": false },
      { "body": "Задача 15", "id": 15, "completed": false },
      { "body": "Задача 16", "id": 16, "completed": false },
      { "body": "Задача 17", "id": 17, "completed": false },
      { "body": "Задача 18", "id": 18, "completed": false },
      { "body": "Задача 19", "id": 19, "completed": false },
      { "body": "Задача 20", "id": 20, "completed": false },
      { "body": "Задача 21", "id": 21, "completed": false },
      { "body": "Задача 22", "id": 22, "completed": false },
      { "body": "Задача 23", "id": 23, "completed": false }
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
    COMPLETE_TODO(state, todo){
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
    completeTodo({commit}, todo){
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
