import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    snackbar: {
      show: false,
      text: '',
    },
  },
  getters: {
  },
  mutations: {
    addTask(state, newTaskTitle) {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      const task = state.tasks.filter((t) => t.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((t) => t.id !== id);
    },
    displaySnackbar(state, text) {
      state.snackbar.show = true;
      state.snackbar.text = text;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle);
      commit('displaySnackbar', 'Task added successfully');
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id);
      commit('displaySnackbar', 'Task deleted successfully');
    },
  },
});
