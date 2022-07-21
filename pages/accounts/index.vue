<template>
  <v-container class="pa-4">
    <v-row>
      <v-col cols="12">
        <div class="font-weight-bold">All Accounts</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="accounts"
          :search="search"
          sort-by="user"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <div align="center">
              <v-icon class="text-center" small @click="detailItem(item.Name)">
                mdi-eye
              </v-icon>
            </div>
          </template>
          <template v-slot:no-data>
            No data found.
            <!-- <v-btn @click="initialize">Reset</v-btn> -->
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'AccountsPage',
  head() {
    return {
      title: 'Accounts Page',
    }
  },
  computed: {
    headers() {
      return [
        { text: 'Name', value: 'Name' },
        { text: 'Email', value: 'Email' },
        { text: 'Phone', value: 'Phone' },
        { text: 'Status', value: 'Status', sortable: false },
      ]
    },
    accounts() {
      return this.$store.getters['accounts/list']
    },
  },
  mounted() {
    this.getAccounts()
  },
  methods: {
    async getAccounts() {
      await this.$store.dispatch('accounts/fetchList')
    },
  },
}
</script>
