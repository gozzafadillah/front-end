<template>
  <v-container>
    <v-card class="flat card ma-4" v-bind="$attrs" v-on="$listeners">
      <v-layout wrap>
        <v-flex xs3 align-self-center>
          <v-icon class="justify-center" :color="colorIcon" x-large>{{
            icon
          }}</v-icon>
        </v-flex>
        <v-flex xs9>
          <v-card-title class="ma-0 pa-0"> {{ title }} </v-card-title>
          <v-card-text class="text-h4 ma-0 pa-0 font-weight-bold">
            {{ count }}
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'DashboardCard',
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: 'mdi-folder-open-outline',
    },
    title: {
      type: String,
      default: 'Title',
    },
    count: {
      type: Number,
      default: 0,
    },
    colorIcon: {
      type: String,
      default: '#0092E4',
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  padding: 20px 10px;
  background: #fdfdfd;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(6, 57, 67, 0.15) !important;
}
</style>
