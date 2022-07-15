<template>
  <v-snackbar
    v-model="$store.state.snackbar.show"
  >
    {{ text }}

    <template #action="{ attrs }">
      <v-btn
        color="pink"
        text
        v-bind="attrs"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    text: 'Task added successfully',
  }),
};
</script>

<style>

</style>
