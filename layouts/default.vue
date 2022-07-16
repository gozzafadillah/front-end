<template>
  <v-app light>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-layout column justify-center justify-space-between fill-height>
        <div>
          <v-list-item>
            <v-list-item-content>
              <NuxtLink to="/">
                <v-img
                  :src="require(`~/static/assets/img/${logo}`)"
                  alt="alt"
                  width="180"
                ></v-img>
              </NuxtLink>
            </v-list-item-content>
          </v-list-item>

          <v-list nav>
            <template v-for="(item, index) in items">
              <v-list-item
                :key="index"
                :to="`/${item.link}`"
                :title="item.title"
                nuxt
                justify-center
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <v-avatar size="36" width="64">
                      <v-icon>
                        {{ item.icon }}
                      </v-icon>
                    </v-avatar>
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </div>

        <div>
          <v-menu open-on-hover top offset-y close-on-click max-width="120">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item v-bind="attrs" v-on="on">
                <v-list-item-content>
                  <v-layout align-center fill-height>
                    <v-avatar
                      size="40"
                      color="grey lighten-4"
                      class="text-center"
                    >
                      <v-icon>mdi-face-agent</v-icon>
                    </v-avatar>
                    <div class="d-flex mx-2">
                      <span class="blue-grey--text">
                        {{ userLogin.email }}
                      </span>
                    </div>
                  </v-layout>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-list>
              <v-layout column>
                <!-- <v-list-item
                  v-for="(account, index) in accounts"
                  :key="index"
                  :to="`/${account.link}`"
                >
                  <v-list-item-content class="d-block text-center">
                    <v-item-title>{{ account.title }}</v-item-title>
                  </v-list-item-content>
                </v-list-item> -->
                <v-list-item @click="handleLogout">
                  <v-list-item-content class="d-block text-center">
                    <v-list-item-title>Logout</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-layout>
            </v-list>
          </v-menu>
        </div>
      </v-layout>
    </v-navigation-drawer>

    <v-app-bar flat app fixed color="#F0F4F7">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-app-bar-title v-if="drawer === false" transition="scale-transition">
        <Nuxt-Link to="/" class="font-weight-black text-decoration-none">
          <span class="brand">Bayeue</span>
        </Nuxt-Link>
      </v-app-bar-title>
    </v-app-bar>

    <v-main class="main">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  // middleware: ['auth'],
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      logo: 'bayeue.png',
      user: [
        {
          avatar: 'icon.png',
        },
      ],
      items: [
        { link: '', icon: 'mdi-view-dashboard', title: 'Overview' },
        { link: 'products', icon: 'mdi-cube', title: 'Products' },
        {
          link: 'transactions',
          icon: 'mdi-cart-outline',
          title: 'Transactions',
        },
        { link: 'users', icon: 'mdi-account-circle', title: 'Customers' },
      ],
    }
  },
  computed: {
    userLogin() {
      return this.$store.getters['auth/isUser']
    },
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('auth/fetchLogout')
    },
  },
}
</script>
<style lang="scss" scoped>
.main {
  min-height: 100vh;
  background-color: $bayeue-light;
}
.brand {
  color: $bayeue-primary;
}
</style>
