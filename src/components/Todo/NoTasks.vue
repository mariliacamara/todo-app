<template>
  <div
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
</template>

<style lang="scss" scoped>
  .no-tasks {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
