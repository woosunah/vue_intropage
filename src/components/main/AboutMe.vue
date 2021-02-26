<template>
  <div id="about">
    <h1>#01 ABOUT ME</h1>
    <div class="circle-wrap-wrap">
      <div class="circle-wrap">
        <div class="circle">
          <img src="https://picsum.photos/300/300?random" alt="프로필" />
        </div>
      </div>
    </div>
    <div class="profile-wrap-wrap">
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
        <div class="history">
          <h2>HISTORY</h2>
          <br />
          <v-row class="text-box" no-gutters justify="center">
            <div class="left-1">
              <span>19.10.17 - 20.04.30</span>
            </div>
            <div class="right-1">
              (주)패션그룹형지 여성복 라젤로 VMD 근무
            </div>
          </v-row>
          <v-row class="text-box" no-gutters justify="center">
            <div class="left">
              <span>13.06.16 - 18.01.31 </span>
            </div>
            <div class="right">
              (주)티비에이치글로벌(TBH) 마인드브릿지 &amp; <br />
              더클래스/어반코드 남성복/여성복 VMD 근무
            </div>
          </v-row>
          <v-row class="text-box" no-gutters justify="center">
            <div class="left-2">
              <span>12.01.03 - 13.05.31 </span>
            </div>
            <div class="right-2">
              (주)리테일미디어솔루션 이마트 &amp; <br />PB브랜드 코디네이터
            </div>
          </v-row>
        </div>
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
.circle-wrap-wrap {
  margin: 300px auto 0;
}
.circle-wrap {
  position: relative;
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
}
// .profile-wrap-wrap {
//   position: relative;
// }
.profile-wrap {
  width: 600px;
  position: absolute;
  top: 20px;
  right: 0;
}
.profile {
  position: absolute;
  top: 170px;
  right: 430px;
}

.education {
  position: absolute;
  top: 420px;
  right: 200px;
  .text-box {
    flex-flow: row;
    .left {
      margin-right: 16px;
    }
  }
}

.history {
  position: absolute;
  top: 560px;
  right: 130px;
  .text-box {
    flex-flow: row;
    .left {
      margin: 20px 16px 0 0;
    }
    .right {
      margin-top: 20px;
    }
    .left-1 {
      margin: 0 16px 0 -10px;
    }
    .left-2 {
      margin: 20px 16px 0 -77px;
    }
    .right-2 {
      margin-top: 20px;
    }
  }
}
@media only screen and(max-width:1500px) {
  #about {
    height: 1400px;
  }
  .circle {
    margin-top: -90px;
  }
  .profile-wrap-wrap {
    position: relative;
  }
  .profile-wrap {
    position: relative;
    margin: 0 auto;
    .profile {
      display: inline-block;
    }
    .education {
      display: inline-block;
    }
    .history {
      display: inline-block;
    }
  }
}
</style>
