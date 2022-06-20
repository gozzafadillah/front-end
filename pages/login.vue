<template>
  <v-row>
    <v-col class="img text-center my-auto">
      <img src="assets/img/bayeue.png" width="50%" alt="" />
    </v-col>
    <v-col class="form-daftar px-10">
      <div class="heading-1 mb-10 text-center">Login</div>
      <form @submit.prevent="submit">
        <div class="body-regular-2 mb-2">Email</div>

        <v-text-field
          v-model="email"
          label="Masukan email anda"
          required
          solo
        ></v-text-field>

        <div class="body-regular-2 mb-2">Kata Sandi</div>

        <v-text-field
          v-model="password"
          label="Masukan kata sandi anda"
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
          <!-- <v-btn @click="login" color="#528bcc" dark large class="px-10">
            Login
          </v-btn> -->
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
      token: '',
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('authentication/fetchLogin', {
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
