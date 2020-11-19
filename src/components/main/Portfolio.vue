<template>
  <div id="portfolio" ref="portfolio">
    <h1>#02 PORTFOLIO</h1>
    <div class="box-container">
      <transition-group name="list">
        <div class="box1" v-for="(box, i) in boxs" :key="i" v-show="i < timing">
          <img
            :src="box.imgSrc"
            class="portfolio-img"
            alt="포트폴리오 이미지"
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timing: 0,
      isElAppear: false,
      boxs: [
        {
          imgSrc: require('../../assets/img/portfolio_img1.png'),
        },
        {
          imgSrc: require('../../assets/img/portfolio_img1.png'),
        },
        {
          imgSrc: require('../../assets/img/portfolio_img1.png'),
        },
        {
          imgSrc: require('../../assets/img/portfolio_img1.png'),
        },
      ],
    };
  },
  methods: {
    scrollCallbackElAppear(scrollTop) {
      if (this.$refs.portfolio.offsetTop < scrollTop && !this.isElAppear) {
        console.log('appear');
        this.isElAppear = true;
        let interval = setInterval(() => {
          if (this.timing > this.boxs.length) {
            clearInterval(interval);
          }
          this.timing++;
        }, 200);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0);
}
#portfolio {
  background-color: #bfdcd8;
  height: 100vh;
}
.box-container {
  width: 1280px;
  // border: 1px solid #000;
  span {
    display: flex;
    justify-content: flex-start;
  }
  margin: 130px auto 0;
}
.portfolio-img {
  width: 300px;
  height: 300px;
}
.box1 {
  width: 300px;
  height: 300px;
  margin-right: 40px;
}
</style>
