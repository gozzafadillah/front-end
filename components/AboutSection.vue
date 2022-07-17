<template>
  <v-container id="about" class="about" fluid>
    <v-row align="center" justify="center" class="pa-6" fill-height>
      <v-col cols="8">
        <v-row align="center" justify="space-around">
          <v-col cols="6">
            <h2 class="text-h3 font-weight-bold mb-4">About Bayeue</h2>
            <p>
              Bayeue provides convenience through the touch of a finger in
              making any transactions easily, from transfers, top ups, to
              payments. enjoy the convenience of making payments.
            </p>
            <p>
              Bayeue is an online payment made to help make every payment needs
              in life easy and safe. With Bayeue, people can be calmer with
              their bills so they can be more productive in living their lives
            </p>
          </v-col>
          <v-col cols="6" align="center">
            <v-img
              :src="require('static/assets/about.svg')"
              max-width="360"
              container
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'AboutComponent',
}
</script>
