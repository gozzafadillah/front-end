<template>
  <v-card
    :class="[dark ? 'dark' : 'light', 'd-flex', 'align-center', 'flat', 'card']"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-row wrap dense>
      <v-col align="center" align-self="center">
        <v-icon x-large :color="colorIcon">
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
    colorIcon: {
      type: String,
      default: '#fff',
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
