<template>
  <div class="main">
    <banner ref="bannerEl"></banner>
    <about-me></about-me>
    <portfolio ref="portfolioEl"></portfolio>
    <skill ref="skillEl"></skill>
    <contact></contact>

    <div id="top-btn">
      <v-btn
        class="ma-2"
        dark
        small
        fab
        color="rgba(107,183,194,0.8)"
        @click="scrollToTop()"
      >
        <v-icon>mdi-arrow-up-drop-circle</v-icon>
      </v-btn>
    </div>
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
      this.$refs.skillEl.scrollCallbackProgressAnimationStart(scrollTop);
    });
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
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
#top-btn {
  position: fixed;
  bottom: 10px;
  right: 30px;
  z-index: 10;
}
</style>
