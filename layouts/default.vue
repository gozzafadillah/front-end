<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-layout column justify-center justify-space-between fill-height>
        <div>
          <v-list-item>
            <v-list-item-content>
              <div class="text-center">
                <div>
                  <img src="assets/img/bayeue.png" alt="alt" width="180" />
                </div>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list nav>
            <template v-for="(item, index) in items">
              <v-list-item
                :key="index"
                :to="`/${item.link}`"
                :title="item.title"
                nuxt
                router
                justify-center
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <v-avatar size="36" width="64">
                      <v-icon>{{ item.icon }}</v-icon>
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
                      <img :src="user.avatar" alt="alt" />
                    </v-avatar>
                    <div class="d-flex mx-2">
                      <span class="blue-grey--text">
                        {{ user.name }}
                      </span>
                    </div>
                  </v-layout>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-list>
              <v-layout column>
                <v-list-item
                  v-for="(account, index) in accounts"
                  :key="index"
                  :to="`/${account.link}`"
                >
                  <v-list-item-content class="d-block text-center">
                    <v-item-title>{{ account.title }}</v-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-layout>
            </v-list>
          </v-menu>
        </div>
      </v-layout>
    </v-navigation-drawer>

    <v-app-bar flat app fixed color="#fff">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-main>
      <v-container>
        <div class="container">
          <v-row>
            <v-col>
              <DashboardCard icon="mdi-account" title="Admins" :count="2" />
            </v-col>
            <v-col>
              <DashboardCard
                icon="mdi-account-multiple"
                title="Costumers"
                :count="10"
              />
            </v-col>
            <v-col>
              <DashboardCard
                title="Transactions"
                icon="mdi-swap-horizontal"
                :count="10"
              />
            </v-col>
            <v-col>
              <DashboardCard
                color-icon="#fff"
                dark
                color="primary"
                title="Products"
                icon="mdi-cube"
                :count="3"
              />
            </v-col>
          </v-row>
        </div>

        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      user: {
        name: 'Nanda HM',
        avatar: 'icon.png',
      },
      items: [
        { link: '', icon: 'mdi-view-dashboard', title: 'Overview' },
        { link: 'products', icon: 'mdi-town-hall', title: 'Products' },
        { link: 'transaction', icon: 'mdi-town-hall', title: 'Transaction' },
        { link: 'account', icon: 'mdi-account-box-outline', title: 'Account' },
      ],
      accounts: [
        { link: 'setting', icon: 'mdi-cog-outline', title: 'Setting' },
        { link: 'logout', icon: 'mdi-logout-variant', title: 'Logout' },
      ],
    }
  },
}
</script>
<style lang="sass" scoped></style>
