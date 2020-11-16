<template>
  <div class="main">
    <banner />
    <about-me></about-me>
    <portfolio></portfolio>
    <skill />
    <contact />
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    Banner: () => import('@/components/main/Banner.vue'),
    AboutMe: () => import('@/components/main/AboutMe.vue'),
    Portfolio: () => import('@/components/main/Portfolio.vue'),
    Skill: () => import('@/components/main/Skill.vue'),
    Contact: () => import('@/components/main/Contact.vue'),
  },
};
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
}
</style>
