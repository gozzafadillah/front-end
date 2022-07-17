<template>
  <v-app>
    <Navigation :color="color" flat />

    <v-main class="pt-0">
      <Home />
      <About />
      <OurTeam />
      <FAQs />
      <Download />
    </v-main>

    <v-scale-transition>
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        fab
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>

    <Footer />
    <!-- 
    <v-row class="about py-16 px-16">
      <v-col cols="7" class="my-auto px-12">
        <div class="heading-1">About Bayeue</div>
        <div class="body-regular">
          Bayeue provides convenience through the touch of a finger in making
          any transactions easily, from transfers, top ups, to payments. enjoy
          the convenience of making payments.Bayeue is an online payment made to
          help make every payment needs in life easy and safe. With Bayeue,
          people can be calmer with their bills so they can be more productive
          in living their lives
        </div>
      </v-col>
      <v-col cols="5" class="text-left">
        <img src="@/assets/img/illustration.png" alt="" />
      </v-col>
    </v-row>

    <div class="download">
      <v-row class="my-10 px-16 text-center">
        <v-col>
          <div class="body-regular">
            Download the Bayeue mobile app for iOS or Android.
          </div>
        </v-col>
        <v-col>
          <v-btn large dark class="mr-2">
            <v-icon class="mr-2">mdi-google-play</v-icon>Google Play
          </v-btn>
          <v-btn large dark>
            <v-icon class="mr-2">mdi-apple</v-icon>App Store
          </v-btn>
        </v-col>
      </v-row>
    </div>
    -->
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Home from '~/components/HomeSection.vue'
import About from '~/components/AboutSection.vue'
import OurTeam from '~/components/OurTeamSection.vue'
import FAQs from '~/components/FAQsSection.vue'
import Download from '~/components/DownloadSection.vue'
import Footer from '~/components/Footer.vue'
export default {
  name: 'LandingPage',
  components: {
    Navigation,
    Home,
    About,
    OurTeam,
    FAQs,
    Download,
    Footer,
  },
  layout: 'blank',
  data() {
    return {
      fab: null,
      color: '#3AA2DC',
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = '#3AA2DC'
      }
    },
  },
  created() {},
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 60
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>

<style lang="scss" scoped>
.v-main {
  background-image: url('@/static/assets/3d.svg');
  // background-color: $bayeue-primary-light;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  z-index: 3;
}

.content-1 {
  margin-top: 8.304498269896193vh !important ;
  background-color: #f0f4f7;
}
.heading-1 {
  font-family: 'inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 58px;
}
.body-regular {
  font-family: 'inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
}
.body-bold {
  font-family: 'inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
}
.body-regular-2 {
  font-family: 'inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
}
.feature {
  background-color: #3aa2dc;
}
.about {
  background-color: #f0f4f7;
}
.download {
  background-color: #aad2e9;
}
.footer {
  background-color: #3aa2dc;
}
</style>
