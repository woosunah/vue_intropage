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
    return {
      timing: 0,
      timing2: 0,
      timing3: 0,
      timing4: 0,
      last_known_scroll_position: 0,
      ticking: false,
      currentY: 0,
    };
  },
  mounted() {
    document.body.addEventListener('onload', this.draw());
  },

  methods: {
    scrollParallax(scrollTop) {
      this.last_known_scroll_position = scrollTop;

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.currentY = this.last_known_scroll_position;
          this.ticking = false;
        });

        this.ticking = true;
      }
    },
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
        this.timing = this.timing - 0.1;
        this.timing2 = this.timing2 - 0.15;
        this.timing3 = this.timing3 - 0.2;
        this.timing4 = this.timing4 - 0.2;

        this.sinCurv(ctx, this.timing4, '#A0A603', 65, 20, 60 - this.currentY);
        this.sinCurv(
          ctx,
          this.timing,
          'rgba(255,255,255,0.8)',
          75,
          13,
          -1 * this.currentY * 0.5
        );
        this.sinCurv(
          ctx,
          this.timing2,
          'rgba(107,183,194,0.8)',
          70,
          15,
          30 - this.currentY * 0.8
        );
        this.sinCurv(
          ctx,
          this.timing3,
          'rgba(40,132,145,0.8)',
          65,
          20,
          60 - this.currentY
        );

        window.requestAnimationFrame(this.draw);
      }
    },

    sinCurv(ctx, rad, color, length, amp, y = 0) {
      let curv = new Path2D();
      curv.moveTo(0, 200 + y);
      let prevX = 0;
      let prevY = 200 + y;
      for (let i = -1; i < 1000; i++) {
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
