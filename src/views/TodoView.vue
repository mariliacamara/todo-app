<template>
  <div class="home">
    <AddTask />
    <TaskList v-if="$store.state.tasks.length" />
    <NoTasks v-else />
  </div>
</template>

<script>
import AddTask from '../components/Todo/AddTask.vue';
import TaskList from '../components/Todo/TaskList.vue';
import NoTasks from '../components/Todo/NoTasks.vue';

export default {
  name: 'TodoView',
  components: {
    AddTask,
    TaskList,
    NoTasks,
  },
};
</script>
