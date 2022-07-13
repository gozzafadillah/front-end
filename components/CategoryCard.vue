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
  },
}
</script>
<style lang="scss" scoped>
.card {
  background: #fdfdfd;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(6, 57, 67, 0.15) !important;
}
</style>
