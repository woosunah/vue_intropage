<template>
  <div class="main">
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
    AboutMe: () => import('@/components/main/AboutMe.vue'),
    Portfolio: () => import('@/components/main/Portfolio.vue'),
    Skill: () => import('@/components/main/Skill.vue'),
    Contact: () => import('@/components/main/Contact.vue'),
  },
};
</script>

<style lang="scss" scoped></style>
