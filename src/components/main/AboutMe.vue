<template>
  <div class="aboutme">
    <div class="box-container">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.aboutme {
  background-color: rgb(109, 160, 175);
  height: 100vh;
}
.box-container {
  width: 1280px;
  margin: 0 auto;
  display: inline-block;
}
.box1 {
  margin: 50px;
  width: 300px;
  height: 400px;
  background-color: #eee;
  display: inline-block;
}
.box2 {
  margin: 50px;
  width: 300px;
  height: 400px;
  background-color: #333;
  display: inline-block;
}
.box3 {
  margin: 50px;
  width: 300px;
  height: 400px;
  background-color: rgb(238, 238, 157);
  display: inline-block;
}
.box4 {
  margin: 50px;
  width: 300px;
  height: 400px;
  background-color: rgb(83, 175, 147);
  display: inline-block;
}
</style>
