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

    <DeleteDialog
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
      :task="task"
    />

    <EditDialog
      v-if="dialogs.edit"
      @close="dialogs.edit = false"
      :task="task"
    />
  </div>
</template>

<script>
import DeleteDialog from './Dialogs/DeleteDialog.vue';
import EditDialog from './Dialogs/EditDialog.vue';

export default {
  props: ['task'],
  components: {
    DeleteDialog,
    EditDialog,
  },
  data() {
    return {
      dialogs: {
        delete: false,
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
            console.log('Due Date');
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
