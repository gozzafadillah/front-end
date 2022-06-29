<template>
  <v-card
    :class="[dark ? 'dark' : 'light', 'flat', 'card']"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-row wrap>
      <v-col align="center" align-self="center">
        <v-icon class="ma-3" x-large :color="colorIcon">
          {{ iconButton }}
        </v-icon>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: 'ButtonCard',
  props: {
    iconButton: {
      type: String,
      default: 'mdi-plus-box',
    },
    dark: {
      type: Boolean,
      default: true,
    },
    colorIcon: {
      type: String,
      default: '#fff',
    },
  },
}
</script>
<style lang="scss" scoped>
.dark {
  background-color: $bayeue-primary;
  color: #fff;
}
.light {
  background-color: #fff;
  color: $bayeue-dark;
}
.card {
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(6, 57, 67, 0.15) !important;
}
</style>
