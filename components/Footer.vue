<template>
  <section id="footer">
    <v-container fluid class="footer">
      <v-row align="center" class="pa-md-10">
        <v-col cols="12" md="6" align="center">
          <v-img
            :src="require('static/assets/bayeue_white.svg')"
            alt=""
            max-width="300"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12" md="4">
              <div class="body-bold white--text">Services</div>
              <div class="item mt-6">
                <v-btn dark text class="px-0" height="0"> Product </v-btn>
              </div>
              <div class="item mt-2">
                <v-btn dark text class="px-0" height="0"> Experiences </v-btn>
              </div>
              <div class="item mt-2">
                <v-btn dark text class="px-0" height="0"> Branding </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="body-bold white--text">Legal</div>
              <div class="item mt-6">
                <v-btn dark text class="px-0" height="0">
                  Cookies Policy
                </v-btn>
              </div>
              <div class="item mt-2">
                <v-btn dark text class="px-0" height="0"> Terms of User </v-btn>
              </div>
              <div class="item mt-2">
                <v-btn dark text class="px-0" height="0">
                  Privacy Policy
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="body-bold white--text">Get News and Update</div>
              <div class="item mt-6">
                <v-btn dark text class="px-0" height="0">
                  <v-icon class="mr-2">mdi-facebook</v-icon>Facebook
                </v-btn>
              </div>
              <div class="item mt-2">
                <v-btn dark text class="px-0" height="0">
                  <v-icon class="mr-2">mdi-instagram</v-icon>Instagram
                </v-btn>
              </div>
              <div class="item mt-2">
                <v-btn dark text class="px-0" height="0">
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
  background-color: #aad2e9;
}
</style>
