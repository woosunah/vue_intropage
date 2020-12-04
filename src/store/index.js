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
        text: '웹 표준을 바탕으로<br> 꼼꼼한 시맨틱 마크업을 작성합니다. css',
        color: '#4CAF50',
      },
      {
        img: require('../assets/img/javascript_icon.png'),
        value: '30',
        text: '웹 표준을 바탕으로<br> 꼼꼼한 시맨틱 마크업을 작성합니다. js',
        color: '#ff9800',
      },
      {
        img: require('../assets/img/vue_icon.png'),
        value: '30',
        text: '웹 표준을 바탕으로<br> 꼼꼼한 시맨틱 마크업을 작성합니다. vue',
        color: '#4CAF50',
      },
      {
        img: require('../assets/img/ps_icon.png'),
        value: '90',
        text: '웹 표준을 바탕으로<br> 꼼꼼한 시맨틱 마크업을 작성합니다. ps',
        color: '#ff9800',
      },
      {
        img: require('../assets/img/ai_icon.png'),
        value: '90',
        text: '웹 표준을 바탕으로<br> 꼼꼼한 시맨틱 마크업을 작성합니다. ai',
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
