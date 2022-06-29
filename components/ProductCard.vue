<template>
  <v-card class="flat card" v-bind="$attrs" v-on="$listeners">
    <v-row>
      <v-col cols="12" align="center" align-self="center">
        <v-img :src="productSrc" class="pt-4"> </v-img>
        <v-card-text class="font-weight-bold ma-0 pa-0">
          {{ productName }}
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
    productName: {
      type: String,
      default: 'Product',
    },
    isActive: {
      type: Boolean,
      default: false,
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
