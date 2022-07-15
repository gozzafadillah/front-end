<template>
  <v-app>
    <v-app-bar app dark color="#3aa2dc">
      <v-toolbar-title>
        <v-img :src="logo"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn text> Home </v-btn>
        <v-btn text> Feature </v-btn>
        <v-btn text> About </v-btn>
        <v-btn color="white" class="primary--text" rounded> Download </v-btn>
      </div>
    </v-app-bar>

    <v-row class="content-1">
      <v-col cols="5" class="text-right">
        <div class="background"></div>
        <!-- <img src="@/assets/img/phone.png" height="600px" alt="" /> -->
      </v-col>

      <v-col cols="7" class="my-auto px-12">
        <div class="heading-1">Provide Convenience in Transactions</div>

        <div class="body-leguler">
          The ease of transacting can be felt by everyone and tracking every
          transaction that occurs
        </div>

        <div class="mt-4">
          <v-btn large dark class="mr-2">
            <v-icon class="mr-2">mdi-google-play</v-icon>Google Play
          </v-btn>
          <v-btn large dark>
            <v-icon class="mr-2">mdi-apple</v-icon> App Store
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <div class="feature px-16">
      <div class="heading-1 text-center white--text my-4">Feature</div>
      <v-row class="mb-4">
        <v-col>
          <v-row>
            <v-col cols="3">
              <img src="@/assets/img/history.png" alt="" />
            </v-col>
            <v-col cols="9" class="pl-6 white--text">
              <div class="body-bold">History</div>
              <div class="body-regular-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit ut
                aliquam,
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="3">
              <img src="@/assets/img/payment.png" alt="" />
            </v-col>
            <v-col cols="9" class="pl-6 white--text">
              <div class="body-bold">Payment</div>
              <div class="body-regular-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit ut
                aliquam,
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="3">
              <img src="@/assets/img/favorite.png" alt="" />
            </v-col>
            <v-col cols="9" class="pl-6 white--text">
              <div class="body-bold">Favorite</div>
              <div class="body-regular-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit ut
                aliquam,
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

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
  </v-app>
</template>

<script>
export default {
  name: 'LandingPage',
  layout: 'blank',
  data() {
    return {
      logo: './assets/img/logo-putih.png',
      image: '@/assets/img/background.svg',
    }
  },
}
</script>

<style lang="scss" scoped>
.background {
  background-image: url('@/assets/img/background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 110vh;
  width: 100vw;
  z-index: 10;
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
