<template>
  <v-card
    :class="[dark ? 'dark' : 'light', 'd-flex', 'align-center', 'flat', 'card']"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-row wrap dense>
      <v-col align="center" align-self="center">
        <v-icon x-large :color="colorIcon">
          {{ categoryIcon }}
        </v-icon>
        <v-card-text>
          {{ categoryName }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: 'CategoryCard',
  inheritAttrs: false,
  props: {
    categoryIcon: {
      type: String,
      default: 'mdi-folder',
    },
    categoryName: {
      type: String,
      default: 'Category',
    },
    isActive: {
      type: Boolean,
      default: false,
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
