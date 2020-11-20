<template>
  <div id="about">
    <h1>#01 ABOUT ME</h1>
    <div class="circle">
      <img src="https://picsum.photos/300/300?random" alt="프로필" />
    </div>
    <div class="profile-wrap">
      <div class="profile">
        <h2>PROFILE</h2>
        <br />
        <p>우선아</p>
        <p>1989.05.11</p>
        <p>010 4531 9830</p>
        <p>sunah5011@gmail.com</p>
      </div>
      <div class="education">
        <h2>EDUCATION</h2>
        <br />
        <v-row class="text-box" no-gutters justify="center">
          <div class="left">
            <span>20.06.18 - 20.11.20</span>
          </div>
          <div class="right">
            인터렉티브 앱 &amp; 웹디자인 <br />
            웹퍼블리셔 , 프론트엔드 과정 수료
          </div>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#about {
  height: 100vh;
  background-color: rgba(239, 242, 244);
  position: relative;
}
.circle {
  width: 400px;
  height: 400px;
  background-color: rgba(140, 183, 193, 0.8);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
}
.profile-wrap {
  width: 600px;
  position: absolute;

  top: 20px;
  right: 0;
}
.profile {
  position: absolute;
  top: 230px;
  right: 350px;
}

.education {
  position: absolute;
  top: 520px;
  right: 125px;
  .text-box {
    flex-flow: row;
    .left {
      margin-right: 16px;
    }
  }
}

@media only screen and(max-width:767px) {
  .circle {
    margin-top: -90px;
  }
  .profile-wrap {
    position: relative;
    .profile {
      position: absolute;
      top: 450px;
      left: 60px;
    }
    .education {
      width: 400px;
      position: absolute;
      top: 450px;
      left: 260px;
    }
  }
}
</style>
