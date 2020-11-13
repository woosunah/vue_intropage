<template>
  <div class="nav">
    <v-navigation-drawer
      v-model="inputValue"
      absolute
      style="opacity:0.6"
      :width="naviWidth"
      class="box"
    >
      <v-list nav dense>
        <v-list-item-group active-class="#3b92bb-text text--accent-4">
          <v-list-item class="my-30">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item class="my-30">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item class="my-30">
            <v-list-item-icon>
              <v-icon>mdi-file-document-edit-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item>

          <v-list-item class="my-30">
            <v-list-item-icon>
              <v-icon>mdi-head-lightbulb-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Skill</v-list-item-title>
          </v-list-item>
          <v-list-item class="my-30">
            <v-list-item-icon>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact</v-list-item-title>
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
    this.naviWidth = window.innerWidth / 2;
  },
};
</script>

<style lang="scss" scoped>
.my-30 {
  margin: 100px 80px;
}
</style>
