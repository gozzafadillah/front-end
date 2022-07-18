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
  head() {
    return {
      title: 'Landing Page',
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
</style>
