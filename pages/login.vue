<template>
  <v-row>
    <v-col
      cols="12"
      md="5"
      lg="5"
      xl="4"
      justify="center"
      class="text-center mx-auto my-auto"
    >
      <NuxtLink to="/">
        <v-img src="bayeue.png" contain aspect-ratio="4" alt=""></v-img>
      </NuxtLink>
    </v-col>
    <v-col cols="12" md="7" lg="7" xl="8" class="form-daftar px-10">
      <div class="heading-1 mb-10 text-center">Login</div>
      <form @submit.prevent="handleSubmit">
        <div class="body-regular-2 mb-2">Email</div>

        <v-text-field
          v-model="email"
          placeholder="Masukan email anda"
          required
          solo
        ></v-text-field>

        <div class="body-regular-2 mb-2">Kata Sandi</div>

        <v-text-field
          v-model="password"
          placeholder="Masukan kata sandi anda"
          required
          solo
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>

        <div class="text-center">
          <v-btn
            type="submit"
            name="submit"
            color="#528bcc"
            dark
            large
            class="px-10"
          >
            Login
          </v-btn>
        </div>
      </form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'blank',
  data() {
    return {
      showPassword: false,
      email: '',
      password: '',
    }
  },
  mounted() {
    this.$store.getters['auth/isAuthenticated'] && this.$router.push('/')
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('auth/fetchLogin', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>
<style scoped>
.form-daftar {
  padding-top: 15%;
  background-color: #e3f4fe;
}
.heading-1 {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 43.65px;
  color: #528bcc;
}
.body-regular-2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16.42px;
  color: #2e5786;
}
</style>
