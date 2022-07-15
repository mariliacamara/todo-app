<template>
  <div class="home">
    <v-list
      flat
    >
      <div
        v-for="task in tasks"
        :key="task.id"
      >
        <v-list-item
          @click="doneTask(task.id)"
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
                @click.stop="deleteTask(task.id)"
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
  </div>
</template>

<script>
export default {
  name: 'TodoView',
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Wake Up',
          done: false,
        },
        {
          id: 2,
          title: 'Get up',
          done: false,
        },
        {
          id: 3,
          title: 'Study',
          done: false,
        },
      ],
    };
  },
  methods: {
    doneTask(id) {
      const task = this.tasks.filter((t) => t.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },
  },
};
</script>
