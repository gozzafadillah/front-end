<template>
  <v-card
    :class="[dark ? 'dark' : 'light', 'd-flex', 'align-center', 'flat', 'card']"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-row dense wrap>
      <v-col cols="3" align="center" align-self="center">
        <v-icon :color="colorIcon" x-large>
          {{ icon }}
        </v-icon>
      </v-col>
      <v-col cols="9">
        <v-card-title :class="[dark ? 'dark' : 'light', 'ma-0', 'pa-0']">
          {{ title }}
        </v-card-title>
        <v-card-text
          :class="[
            dark ? 'dark' : 'light',
            'text-h4',
            'ma-0',
            'pa-0',
            'font-weight-bold',
          ]"
        >
          {{ count }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
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

    dark: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
