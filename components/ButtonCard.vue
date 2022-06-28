<template>
  <v-container>
    <v-card
      :class="[
        dark ? 'dark' : 'light',
        'mx-auto',
        'button__card',
        'text-center',
      ]"
      align="center"
      align-self="center"
      v-on="$listeners"
    >
      <v-row wrap>
        <v-col align-self="center" justify="center" class="my-auto">
          <v-icon class="justify-center" x-large>
            {{ iconButton }}
          </v-icon>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
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
  },
}
</script>
<style lang="scss" scoped>
.dark {
  background-color: $bayeue-primary;
  color: #fff;
}
</style>
