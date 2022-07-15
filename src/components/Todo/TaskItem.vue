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
        <v-list-item-action>
          <v-btn
            @click.stop="dialogs.delete = true"
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
    <DeleteDialog
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
      :task="task"
    />
  </div>
</template>

<script>
import DeleteDialog from './Dialogs/DeleteDialog.vue';

export default {
  props: ['task'],
  components: {
    DeleteDialog,
  },
  data() {
    return {
      dialogs: {
        delete: false,
      },
    };
  },
};
</script>
