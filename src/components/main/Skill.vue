<template>
  <div id="skill" ref="skill">
    <h1>#03 SKILL</h1>
    <v-row class="skill-icon-wrap" no-gutters>
      <v-col
        cols="12"
        lg="4"
        md="6"
        v-for="(skill, i) in skills"
        :key="i"
        class="skill-icon-group"
      >
        <v-progress-circular
          :rotate="-90"
          :size="200"
          :width="15"
          :value="isAnimationStart ? skill.value : 0"
          :color="skill.color"
          ><img :src="skill.img" />
          <p class="graph">{{ skill.value }}%</p>
        </v-progress-circular>
        <p class="skill-info" v-html="skill.text"></p>
      </v-col>
    </v-row>
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
  mounted() {},
};
</script>

<style lang="scss">
#skill {
  // height: 100vh;
  background-color: rgb(242, 243, 243);
  h1 {
    padding-top: 80px;
    // border: 1px solid #000;
  }
}
.skill-icon-wrap {
  width: 66.66666666666667%; /*1280px;*/
  margin: 20px auto 0;
  padding: 40px 0;
  flex-flow: row wrap;
  align-items: flex-start;
  position: relative;
}
.skill-icon-group {
  width: 31.25%; /*400px;*/
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 20px;
  margin-bottom: 20px;
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
