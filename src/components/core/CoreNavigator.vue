<template>
  <div class="nav">
    <v-navigation-drawer
      v-model="inputValue"
      absolute
      :width="naviWidth"
      class="box"
      height="100vh"
    >
      <v-list nav dense>
        <v-list-item-group class="list-wrap">
          <v-list-item v-for="(item, i) in items" :key="i" :href="item.href">
            <v-list-item-icon>
              <v-icon class="list-icon">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="list-title">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'CoreNavigator',
  data() {
    return {
      naviWidth: 400,
      items: [
        { href: '#banner', icon: 'mdi-home', title: 'Home' },
        { href: '#about', icon: 'mdi-account', title: 'About' },
        {
          href: '#portfolio',
          icon: 'mdi-file-document-edit-outline',
          title: 'Portfolio',
        },
        { href: '#skill', icon: 'mdi-head-lightbulb-outline', title: 'Skill' },
        { href: '#contact', icon: 'mdi-phone', title: 'Contact' },
      ],
    };
  },
  computed: {
    ...mapState(['drawer']),
    inputValue: {
      get() {
        return this.drawer;
      },
      set(val) {
        this.$store.commit('setDrawer', val);
      },
    },
  },
  mounted() {
    this.naviWidth = window.innerWidth / 3;
  },
};
</script>

<style lang="scss" scoped>
.list-wrap {
  margin-top: 100px;
  padding: 40px;
}
.nav .list-title {
  font-weight: bold;
  font-size: 40px;
  padding: 40px;
}
.nav .list-title:hover {
  color: rgb(40, 132, 145);
}
.list-icon {
  padding: 40px;
}
a {
  text-decoration: none;
}
</style>
