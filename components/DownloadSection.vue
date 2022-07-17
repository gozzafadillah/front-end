<template>
  <section id="download">
    <v-container id="download" class="download" fluid>
      <v-row align="center" justify="center" class="pa-md-16" fill-height>
        <v-col cols="12" md="8" class="pa-md-16">
          <v-row align="center" justify="space-around">
            <v-col cols="12" md="6">
              <h2 class="text-h3 font-weight-bold mb-4">Download App</h2>
              <p>
                Don't think too long! immediately download the Bayeue mobile
                app! Various kinds of transactions are waiting for you there.
              </p>
              <div>
                <v-btn large dark class="mr-2">
                  <v-icon class="mr-2">mdi-google-play</v-icon>Google Play
                </v-btn>
                <v-btn large dark>
                  <v-icon class="mr-2">mdi-apple</v-icon> App Store
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6" align="center">
              <v-img
                :src="require('static/assets/iphone-download.svg')"
                max-width="360"
                container
              ></v-img>
            </v-col> </v-row
          >``
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  name: 'DownloadComponent',
}
</script>
