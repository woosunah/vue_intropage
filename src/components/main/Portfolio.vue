<template>
  <div id="portfolio" ref="portfolio">
    <h1>#02 PORTFOLIO</h1>

    <transition-group name="list" tag="div" class="box-container">
      <div class="box1" v-for="(box, i) in boxs" :key="i" v-show="i < timing">
        <img :src="box.imgSrc" class="portfolio-img" alt="포트폴리오 이미지" />
      </div>
    </transition-group>
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
  padding: 100px 0;
  h1 {
    padding: 30px 0;
  }
}
.box-container {
  width: 50%; /*1280px*/
  // border: 1px solid #000;
  margin: 150px auto;
  display: flex;
  justify-content: center;
}
.box1 {
  width: 260px;
  margin: 0 20px 40px;
}
.portfolio-img {
  width: 260px;
  height: 260px;
}

@media only screen and(max-width:767px) {
  .box-container {
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    top: 60px;
    left: 75px;
  }
  .box1 {
    margin: 0 20px 40px;
  }
  .portfolio-img {
    width: 260px;
    height: 260px;
  }
}
</style>
