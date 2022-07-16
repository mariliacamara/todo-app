<template>
  <div>
    <v-menu
      bottom
      left
    >
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleItemClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>

    <EditDialog
      v-if="dialogs.edit"
      @close="dialogs.edit = false"
      :task="task"
    />

    <DueDateDialog
      v-if="dialogs.dueDate"
      @close="dialogs.dueDate = false"
      :task="task"
    />

    <DeleteDialog
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
      :task="task"
    />
  </div>
</template>

<script>
import DeleteDialog from './Dialogs/DeleteDialog.vue';
import EditDialog from './Dialogs/EditDialog.vue';
import DueDateDialog from './Dialogs/DueDateDialog.vue';

export default {
  props: ['task'],
  components: {
    DeleteDialog,
    EditDialog,
    DueDateDialog,
  },
  data() {
    return {
      dialogs: {
        delete: false,
        dueDate: false,
        edit: false,
      },
      items: [
        {
          icon: 'mdi-pencil',
          title: 'Edit',
          click() {
            this.dialogs.edit = true;
          },
        },
        {
          icon: 'mdi-calendar',
          title: 'Due Date',
          click() {
            this.dialogs.dueDate = true;
          },
        },
        {
          icon: 'mdi-delete',
          title: 'Delete',
          click() {
            this.dialogs.delete = true;
          },
        },
      ],
    };
  },
  methods: {
    handleItemClick(index) {
      this.items[index].click.call(this);
    },
  },
};
</script>

<style>

</style>
