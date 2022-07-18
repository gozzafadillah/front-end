<template>
  <section id="footer">
    <v-container fluid class="footer">
      <v-row align="center" class="pa-md-10">
        <v-col cols="12" md="6" align="center">
          <NuxtLink to="/login">
            <v-img
              :src="require('static/assets/bayeue_white.svg')"
              alt=""
              max-width="300"
            ></v-img>
          </NuxtLink>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12" md="4">
              <div class="none font-weight-bold white--text text-h6">
                Services
              </div>
              <div class="mt-6">
                <v-btn class="text-capitalize px-0" dark text height="0">
                  Products
                </v-btn>
              </div>
              <div class="mt-2">
                <v-btn class="text-capitalize px-0" dark text height="0">
                  Experiences
                </v-btn>
              </div>
              <div class="mt-2">
                <v-btn class="text-capitalize px-0" dark text height="0">
                  Branding
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="font-weight-bold white--text text-h6">Legal</div>
              <div class="mt-6">
                <v-btn class="text-capitalize px-0" dark text height="0">
                  Cookies Policy
                </v-btn>
              </div>
              <div class="mt-2">
                <v-btn class="text-capitalize px-0" dark text height="0">
                  Terms of User
                </v-btn>
              </div>
              <div class="mt-2">
                <v-btn class="text-capitalize px-0" dark text height="0">
                  Privacy Policy
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="font-weight-bold white--text text-h6">
                Get News and Update
              </div>
              <div class="mt-6">
                <v-btn class="text-capitalize px-0" dark text height="0">
                  <v-icon class="mr-2">mdi-facebook</v-icon>Facebook
                </v-btn>
              </div>
              <div class="mt-2">
                <v-btn class="text-capitalize px-0" dark text height="0">
                  <v-icon class="mr-2">mdi-instagram</v-icon>Instagram
                </v-btn>
              </div>
              <div class="mt-2">
                <v-btn class="text-capitalize px-0" dark text height="0">
                  <v-icon class="mr-2">mdi-twitter</v-icon>Twitter
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center reserved">
          Copyright &copy; 2022. All right reserved - Bayeue Team.
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  name: 'FooterComponent',
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #3aa2dc;
  color: #fff;
}
.reserved {
  color: $bayeue-dark;
  background-color: #aad2e9;
}
</style>
