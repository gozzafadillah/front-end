<template>
  <v-app dark>
    <v-navigation-drawer app permanent floating class="">
      <v-layout column justify-center justify-space-between fill-height>
        <div>
          <v-list-item>
            <v-list-item-content>
              <div class="text-center">
                <div>
                  <img src="assets/img/bayeue.png" alt="alt" width="100" />
                </div>
              </div>
            </v-list-item-content>
          </v-list-item>
        </div>

        <v-list nav>
          <template v-for="(item, index) in items">
            <v-list-item
              :key="index"
              :to="`/${item.link}`"
              :title="item.title"
              nuxt
              justify-center
            >
              <v-list-item-content class="text-center">
                <v-avatar size="36" width="64" class="text-center">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-avatar>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>

        <div>
          <v-list-item>
            <v-list-item-content>
              <div class="text-center">
                <v-avatar size="40" color="grey lighten-4">
                  <img src="icon.png" alt="alt" />
                </v-avatar>
                <p class="pa-2">Nanda</p>
              </div>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-layout>
    </v-navigation-drawer>

    <v-app-bar flat app fixed>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-text-field
          name="search"
          placeholder="Searching here!"
          filled
          small
          solo-inverted
          hide-details
          flat
          dense
          prepend-inner-icon="mdi-magnify"
        />
      </div>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      items: [
        { link: '', icon: 'mdi-apps', title: 'Overview' },
        { link: 'products', icon: 'mdi-town-hall', title: 'Products' },
        { link: 'transaction', icon: 'mdi-town-hall', title: 'Transaction' },
        { link: 'account', icon: 'mdi-account-box-outline', title: 'Account' },
      ],
    }
  },
}
</script>
