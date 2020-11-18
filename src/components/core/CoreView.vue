<template>
  <div id="core-view">
    <router-view></router-view>
    <core-footer />
  </div>
</template>

<script>
export default {
  name: 'CoreView',
  components: { CoreFooter: () => import('@/components/core/CoreFooter.vue') },
};
</script>

<style lang="scss" scoped>
#core-view {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>
