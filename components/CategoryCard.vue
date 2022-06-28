<template>
  <v-card
    class="flat card mx-auto"
    max-width="400"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-row wrap>
      <v-col align-self="center" justify="center" class="my-auto">
        <v-col cols="3" align="center" align-self="center">
          <v-icon class="justify-center" :color="colorIcon" x-large>
            {{ iconCategory }}
          </v-icon>
        </v-col>
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
    iconCategory: {
      type: String,
      default: 'mdi-folder',
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
