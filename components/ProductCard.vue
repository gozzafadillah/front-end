<template>
  <v-card
    :class="[dark ? 'dark' : 'light', 'd-flex', 'align-center', 'flat', 'card']"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-row wrap dense>
      <v-col align="center" justify="center">
        <v-img :src="productSrc" aspect-ratio="1" contain> </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: 'ProductCard',
  inheritAttrs: false,
  props: {
    productName: {
      type: String,
      default: 'Product',
    },
    productSrc: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
