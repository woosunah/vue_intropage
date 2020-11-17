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
        <v-list-item-group active-class="#3b92bb-text text--accent-4">
          <v-list-item class="my-30">
            <v-list-item-icon>
              <v-icon style="padding:20px">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              style="font-weight:bold;font-size:24px;padding:20px;"
              >Home</v-list-item-title
            >
          </v-list-item>

          <v-list-item class="my-30">
            <v-list-item-icon>
              <v-icon style="padding:20px">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              style="font-weight:bold;font-size:24px;padding:20px"
              >About</v-list-item-title
            >
          </v-list-item>

          <v-list-item class="my-30">
            <v-list-item-icon>
              <v-icon style="padding:20px"
                >mdi-file-document-edit-outline</v-icon
              >
            </v-list-item-icon>
            <v-list-item-title
              style="font-weight:bold;font-size:24px;padding:20px"
              >Portfolio</v-list-item-title
            >
          </v-list-item>

          <v-list-item class="my-30">
            <v-list-item-icon>
              <v-icon style="padding:20px">mdi-head-lightbulb-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              style="font-weight:bold;font-size:24px;padding:20px"
              >Skill</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="my-30">
            <v-list-item-icon>
              <v-icon style="padding:20px">mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              class="list-title"
              style="font-weight:bold;font-size:24px;padding:20px"
              >Contact</v-list-item-title
            >
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
    this.naviWidth = window.innerWidth / 2.5;
  },
};
</script>

<style lang="scss" scoped>
.my-30 {
  margin: 100px 80px;
}
</style>
