<template>
  <v-row class="form__login" wrap justify="center" align="center" fill-height>
    <v-col cols="12" md="5" lg="5" xl="4">
      <div class="logo__login">
        <NuxtLink to="/">
          <v-img
            :src="require(`~/static/assets/${logo}`)"
            contain
            aspect-ratio="1"
            alt="Logo Bayeue"
          ></v-img>
        </NuxtLink>
      </div>
    </v-col>
    <v-col cols="12" md="7" lg="7" xl="8">
      <v-row justify="center">
        <v-col cols="10" md="6">
          <h2 class="heading__login mb-10 text-center">Login</h2>
          <form>
            <div class="title__login mb-2">Email</div>
            <v-text-field
              v-model="email"
              placeholder="Enter your email!"
              required
              solo
            ></v-text-field>
            <div class="title__login mb-2">Password</div>
            <v-text-field
              v-model="password"
              placeholder="Enter your password!"
              required
              solo
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <v-btn
              block
              name="submit"
              color="#528bcc"
              dark
              large
              @click="handleSubmit"
            >
              Login
            </v-btn>
          </form>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'blank',
  data() {
    return {
      logo: 'bayeue_circle.svg',
      showPassword: false,
      email: '',
      password: '',
    }
  },
  head() {
    return {
      title: 'Login Page',
    }
  },
  mounted() {
    this.$store.getters['auth/isAuthenticated'] && this.$router.push('/')
  },
  methods: {
    async handleSubmit() {
      const payload = {
        email: this.email,
        password: this.password,
      }
      await this.$store.dispatch('auth/fetchLogin', payload)
    },
  },
}
</script>
<style lang="scss" scoped>
.logo__login {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-height: 100vh;
  @media screen and (max-width: 720px) {
    background-color: inherit;
    min-height: 60px;
  }
}
.form__login {
  background-color: $bayeue-primary-light;
}
.heading__login {
  font-size: 60px;
  color: $bayeue-dark;
  @media screen and (max-width: 720px) {
    font-size: 32px;
  }
}
.title__login {
  font-size: 24px;
  color: $bayeue-dark;
  @media screen and (max-width: 720px) {
    font-size: 16px;
  }
}
</style>
