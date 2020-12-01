<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
html {
  overflow: hidden;
  scroll-behavior: smooth;
}
</style>
