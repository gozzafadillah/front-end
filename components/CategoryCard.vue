<template>
  <v-card class="flat card" height="145px" v-bind="$attrs" v-on="$listeners">
    <v-row>
      <v-col align="center" align-self="center">
        <v-icon :color="colorIcon" x-large>
          {{ categoryIcon }}
        </v-icon>
        <v-card-text class="font-weight-bold ma-0 pa-0">
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
  padding: 20px 10px;
  background: #fdfdfd;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(6, 57, 67, 0.15) !important;
}
</style>
