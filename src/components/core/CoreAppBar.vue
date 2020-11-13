<template>
  <div class="appbar">
    <v-app-bar fixed color="transparent" flat>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'CoreAppBar',
  computed: {
    ...mapState(['drawer']),
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('setDrawer', !this.drawer);
    },
  },
};
</script>

<style lang="scss" scoped>
.appbar {
}
</style>
