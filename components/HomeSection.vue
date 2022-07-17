<template>
  <section id="hero">
    <v-parallax
      :src="require('static/assets/paralax.svg')"
      height="800"
      class="mt-16"
    >
      <v-row align="center" justify="center" class="text--primary">
        <v-col cols="12" md="6" align="center">
          <v-img
            :src="require('static/assets/iphone.svg')"
            class="home__hero"
            container
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h2 class="home__title font-weight-bold mb-4">
            Provide <span class="color__bayeue">Convenience</span> <br />
            in Transactions
          </h2>
          <h6 class="home__subtitle font-weight-regular mb-4">
            The ease of transacting can be felt by everyone <br />
            and tracking every transaction that occurs
          </h6>
          <div class="d-flex">
            <v-btn large dark class="mr-2">
              <v-icon class="mr-2">mdi-google-play</v-icon>Google Play
            </v-btn>
            <v-btn large dark>
              <v-icon class="mr-2">mdi-apple</v-icon> App Store
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container id="features" class="features" fluid>
      <v-row align="center" justify="center" class="pa-6">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 font-weight-bold">Features</h2>
            </v-col>
            <v-col v-for="(feature, i) in features" :key="i" cols="12" sm="4">
              <v-row>
                <v-col cols="12" md="4">
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="8">
                  <h1 class="font-weight-regular">
                    {{ feature.title }}
                  </h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4></v-col
                >
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      dialog: false,
      colorBayeue: '#3AA2DC',
      features: [
        {
          title: 'History',
          text: 'All your transactions will be recorded and it will be very easy to track them',
          img: require('static/assets/history.svg'),
        },
        {
          title: 'Payment',
          text: 'Pay for all your needs, with a few easy steps then your payment is complete',
          img: require('static/assets/payment.svg'),
        },
        {
          title: 'Favorite',
          text: 'Pin payment transactions that you often do, getting faster, getting easier',
          img: require('static/assets/favorite.svg'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.home__hero {
  max-width: 50%;
  @media screen and (max-width: 600px) {
    max-width: 60%;
  }
}
.home__title {
  font-size: 3rem;
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
}
.home__subtitle {
  font-size: 1.4rem;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
}
.color__bayeue {
  color: $bayeue-primary;
}
.features {
  background-color: $bayeue-primary;
  color: #fff;
}
</style>
