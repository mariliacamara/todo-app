<template>
  <v-dialog
    :value="true"
    max-width="290"
  >
    <v-card>
      <v-card-title class="text-h5">
        Edit task
      </v-card-title>

      <v-card-text>
        Edit the title of this task:
        <v-text-field v-model="taskTitle" />
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn
          color="gray darken-1"
          text
          @click="$emit('close')"
        >
          Cancel
        </v-btn>

        <v-btn
          color="red darken-1"
          text
          @click.stop="saveTask"
          :disabled="taskTitleInvalid"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      taskTitle: null,
    };
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.taskTitle === this.task.title;
    },
  },
  methods: {
    saveTask() {
      if (!this.taskTitleInvalid) {
        const payload = {
          id: this.task.id,
          title: this.taskTitle,
        };
        this.$store.dispatch('updateTask', payload);
        this.$emit('close');
      }
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
  },
};
</script>

<style>

</style>
