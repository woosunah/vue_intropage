<template>
  <div id="skill" ref="skill">
    <h1>#03 SKILL</h1>
    <div class="skill-icon-wrap">
      <div v-for="(skill, i) in skills" :key="i" class="skill-icon-group">
        <v-progress-circular
          :rotate="360"
          :size="200"
          :width="15"
          :value="isAnimationStart ? skill.value : 0"
          :color="skill.color"
          ><img :src="skill.img" />
          <p class="graph">{{ skill.value }}%</p>
        </v-progress-circular>
        <p class="skill-info" v-html="skill.text"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      value: 0,
      timing: 0,
      isAnimationStart: false,
    };
  },
  computed: {
    ...mapState(['skills']),
  },
  methods: {
    scrollCallbackProgressAnimationStart(scrollTop) {
      if (this.$refs.skill.offsetTop < scrollTop && !this.isAnimationStart) {
        this.isAnimationStart = true;
      }
    },
  },
};
</script>

<style lang="scss">
#skill {
  height: 100vh;
  background-color: rgb(242, 243, 243);
}
.skill-icon-wrap {
  width: 1280px;
  margin: 50px auto;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: relative;
}
.skill-icon-group {
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 20px;
}

.skill-icon-wrap img {
  width: 80px;
  height: 80px;
  margin-top: 10px;
}

.skill-info {
  padding: 16px 32px;
  margin-top: 20px;
  margin-bottom: 0 !important;
  text-align: center;
}
.v-progress-circular__info {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-flow: column;
  p {
    margin-top: 10px;
    margin-bottom: 0 !important;
  }
}
</style>
