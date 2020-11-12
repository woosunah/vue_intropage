<template>
  <div class="home">
    <core-app-bar />
    <core-view />
    <core-footer />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CoreAppBar: () => import('@/components/core/CoreAppBar.vue'),
    CoreView: () => import('@/components/core/CoreView.vue'),
    CoreFooter: () => import('@/components/core/CoreFooter.vue'),
  },
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
