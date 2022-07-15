<template>
  <div class="home">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add task"
      append-icon="mdi-plus"
      hide-details
      clearable
    />
    <v-list
      v-if="$store.state.tasks.length"
      flat
    >
      <div
        v-for="task in $store.state.tasks"
        :key="task.id"
      >
        <v-list-item
          @click="$store.commit('doneTask', task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              />
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through font-italic': task.done }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                @click.stop="$store.commit('deleteTask', task.id)"
                icon
              >
                <v-icon color="primary lighten-1">
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider />
      </div>
    </v-list>
    <div
      v-else
      class="no-tasks"
    >
      <v-icon
        color="primary"
        size="80"
      >
        mdi-check
      </v-icon>
      <p class="text-h5 primary--text">
        There's no tasks for today!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoView',
  data() {
    return {
      newTaskTitle: '',
    };
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', this.newTaskTitle);
      this.newTaskTitle = '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .no-tasks {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
