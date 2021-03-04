import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    skills: [
      {
        img: require('../assets/img/html_icon.png'),
        value: '80',
        text: '웹 표준을 바탕으로<br> 꼼꼼한 시맨틱 마크업을 작성합니다.',
        color: '#ff9800',
      },
      {
        img: require('../assets/img/css_icon.png'),
        value: '80',
        text: '다양한 프로퍼티를 사용하며<br> 반응형 레이아웃 구현합니다.',
        color: '#4CAF50',
      },
      {
        img: require('../assets/img/javascript_icon.png'),
        value: '30',
        text:
          '기본 문법을 이해하고 <br> 다양한 플로그인 적용 및 jQuery도 구현합니다.',
        color: '#ff9800',
      },
      {
        img: require('../assets/img/vue_icon.png'),
        value: '30',
        text:
          '프로젝트에 필요한 vue 기본 지식과 <br> vuetify 라이브러리 경험 있습니다.',
        color: '#4CAF50',
      },
      {
        img: require('../assets/img/ps_icon.png'),
        value: '90',
        text: '다양한 툴과 편집기능을<br> 자유자재로 사용합니다.',
        color: '#ff9800',
      },
      {
        img: require('../assets/img/ai_icon.png'),
        value: '90',
        text:
          '아이콘 제작 및 백터 소스의<br> 자유로운 제작과 편집이 가능합니다.',
        color: '#4CAF50',
      },
    ],
  },

  mutations: {
    setDrawer(state, payload) {
      state.drawer = payload;
    },
  },
  actions: {},
  modules: {},
});
