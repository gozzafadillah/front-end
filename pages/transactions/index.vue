<template>
  <v-container class="pa-4 pa-md-10">
    <v-row>
      <v-col cols="12" class="mb-10">
        <div class="font-weight-bold">
          <v-btn icon to="/products" class="mr-4">
            <v-icon color="#3aa2dc">mdi-arrow-left</v-icon>
          </v-btn>
          Create New Category
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(transaction, index) in transactions" :key="index">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                {{ transaction.amount }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ transaction.user }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            {{ transaction.amount }}
            <v-tab v-if="transaction.status === 'PAID'">
              <v-badge color="green" :content="transaction.status"> </v-badge>
            </v-tab>
          </v-list-item>

          <v-card-actions>
            <v-btn
              @click="detailTransaction(transaction.paymet_id)"
              outlined
              rounded
              text
            >
              Detail
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'TransactionsPage',
  head() {
    return {
      title: 'Transactions Page',
    }
  },
  computed: {
    transactions() {
      return this.$store.getters['transactions/list']
    },
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
  },
}
</script>
