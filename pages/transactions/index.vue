<template>
  <v-container class="pa-4">
    <v-row>
      <v-col cols="12">
        <div class="font-weight-bold">All Transactions</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="transactions"
          :search="search"
          sort-by="user"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <div align="center">
              <v-icon
                class="text-center"
                small
                @click="detailItem(item.paymet_id)"
              >
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
  name: 'TransactionsPage',
  data() {
    return {
      dialog: false,
      search: '',
      defaultItem: {
        user: '',
        created: '',
        amount: 0,
        status: '',
      },
    }
  },
  head() {
    return {
      title: 'Transactions Page',
    }
  },
  computed: {
    headers() {
      return [
        { text: 'User', value: 'user' },
        { text: 'Date & Time', value: 'created' },
        { text: 'Amount', value: 'amount' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ]
    },
    transactions() {
      return this.$store.getters['transactions/list']
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
  },
  created() {
    this.initialize()
  },
  mounted() {
    this.fetchTransactions()
  },
  methods: {
    async fetchTransactions() {
      await this.$store.dispatch('transactions/fetchList')
    },
    async detailTransaction(id) {
      await this.$router.push(`/transactions/${id}`)
    },
    initialize() {
      this.fetchTransactions()
    },
    detailItem(id) {
      this.$router.push(`/transactions/${id}`)
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>
