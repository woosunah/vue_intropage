<template>
  <div class="main">
    <banner ref="bannerEl"></banner>
    <about-me></about-me>
    <portfolio ref="portfolioEl"></portfolio>
    <skill></skill>
    <contact></contact>
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
  mounted() {
    document.querySelector('#core-view').addEventListener('scroll', (e) => {
      console.log('scrolltop: ', e.target.scrollTop);
      let scrollTop = e.target.scrollTop;
      this.$refs.bannerEl.scrollParallax(scrollTop);
      this.$refs.portfolioEl.scrollCallbackElAppear(scrollTop);
    });
  },
};
</script>

<style lang="scss">
.main {
  min-height: 100vh;
}
h1 {
  text-align: center;
  padding-top: 100px;
}
</style>
