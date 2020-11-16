<template>
  <div class="banner">
    <canvas id="wave" width="1920" height="500">
      this is canvas
    </canvas>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return { timing: 0, last_known_scroll_position: 0, ticking: false };
  },
  mounted() {
    document.body.addEventListener('onload', this.draw());
    document.addEventListener('scroll', () => {
      this.last_known_scroll_position = window.scrollY;

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.scrolling(this.last_known_scroll_position);
          this.ticking = false;
        });

        this.ticking = true;
      }
    });
  },

  methods: {
    init() {
      window.requestAnimationFrame(this.draw);
    },
    draw() {
      const canvas = document.getElementById('wave');
      if (canvas.getContext) {
        // 배경을 그린다
        if (this.timing < -360) {
          this.timing = 0;
        }
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 1920, 500); // 캔버스를 비운다
        this.timing = this.timing - 0.3;

        this.sinCurv(ctx, this.timing, 'rgba(255,255,255)', 20, 70, 20);
        this.sinCurv(ctx, this.timing, 'rgba(107,183,194)', 25, 60, 30);
        this.sinCurv(ctx, this.timing, 'rgba(40,132,145)', 50, 55, 50);

        window.requestAnimationFrame(this.draw);
      }
    },
    scrolling(y) {
      console.log('scroll', y);
    },

    sinCurv(ctx, rad, color, length, amp, y = 0) {
      let curv = new Path2D();
      curv.moveTo(0, 200 + y);
      let prevX = 0;
      let prevY = 200 + y;
      for (let i = -3; i < 1000; i++) {
        let curX = 10 * i;
        let curY =
          Math.sin((Math.PI / length) * i + (Math.PI / 18) * rad) * amp +
          200 +
          y;
        // ctx.lineTo((curX + prevX) / 2, (prevY + curY) / 2)
        curv.quadraticCurveTo(
          prevX,
          prevY,
          (curX + prevX) / 2,
          (prevY + curY) / 2
        );

        prevX = curX;
        prevY = curY;
      }

      curv.lineTo(1920, 500);
      curv.lineTo(0, 500);
      ctx.fillStyle = color;
      ctx.fill(curv);
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  // background-image: url('https://picsum.photos/1920/1080?random');
  // background: url('../../assets/sea.jpg') no-repeat;
  // background-size: contain;
  height: 100vh;
  position: relative;
  background: #bfdcd8; /* fallback for old browsers */
}
#wave {
  position: absolute;
  bottom: 0;
}
</style>
