<template>
  <v-card
    class="flat card mx-auto"
    max-width="400"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-row wrap>
      <v-col align-self="center" justify="center" class="my-auto">
        <v-img
          class="mx-auto"
          :lazy-src="lazySrc"
          max-height="80"
          max-width="80%"
          align="center"
          justify="center"
          :src="imgPath"
        >
        </v-img>
        <v-card-actions class="mx-auto align-center text-center justify-center">
          {{ titleCategory }}
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: 'CategoryCard',
  inheritAttrs: false,
  props: {
    lazySrc: {
      type: String,
      default: 'https://picsum.photos/id/11/10/6',
    },
    imgPath: {
      type: String,
      default: 'https://picsum.photos/id/11/500/300',
    },
    titleCategory: {
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
