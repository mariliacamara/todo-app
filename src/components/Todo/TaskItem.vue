<template>
  <div>
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
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>
              mdi-calendar
            </v-icon>
            {{ task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <TaskMenu :task="task" />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
import { format } from 'date-fns';
import TaskMenu from './TaskMenu.vue';

export default {
  props: ['task'],
  filters: {
    niceDate(value) {
      return format(new Date(value), 'MMM d');
    },
  },
  components: {
    TaskMenu,
  },
};
</script>
