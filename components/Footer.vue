<template>
  <div>
    <v-footer padless class="footer px-16 py-16">
      <v-row>
        <v-col cols="5" class="my-auto">
          <img src="@/assets/img/logo-putih.png" alt="" />
        </v-col>
        <v-col cols="7">
          <v-row>
            <v-col>
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
            <v-col>
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
            <v-col>
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
    </v-footer>
  </div>
</template>
<script>
export default {
  name: 'FooterComponent',
}
</script>
