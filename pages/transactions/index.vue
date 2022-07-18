<template>
  <v-container>
    <v-row>
      <v-col v-for="(transaction, index) in transactions" :key="index">
        Transactions:
        <div>{{ transaction.amount }}</div>
        <div>{{ transaction.paid }}</div>
        <div>{{ transaction.status }}</div>
        <div>{{ transaction.user }}</div>
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
  },
}
</script>
