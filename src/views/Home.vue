<template>
  <div id="home">
    <core-app-bar />
    <core-navigator />
    <core-view />

    <div class="inner-home"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CoreAppBar: () => import('@/components/core/CoreAppBar.vue'),
    CoreNavigator: () => import('@/components/core/CoreNavigator.vue'),
    CoreView: () => import('@/components/core/CoreView.vue'),
  },
};
</script>

<style lang="scss" scoped>
#home {
}
</style>
