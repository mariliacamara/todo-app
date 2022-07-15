<template>
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
    class="pa-3"
    outlined
    label="Add task"
    hide-details
    clearable
  >
    <template #append>
      <v-icon
        @click="addTask"
        :disabled="taskTitleInvalid"
        color="primary"
      >
        mdi-plus
      </v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: '',
    };
  },
  computed: {
    taskTitleInvalid() {
      return !this.newTaskTitle;
    },
  },
  methods: {
    addTask() {
      if (!this.taskTitleInvalid) {
        this.$store.dispatch('addTask', this.newTaskTitle);
        this.newTaskTitle = '';
      }
    },
  },
};
</script>
