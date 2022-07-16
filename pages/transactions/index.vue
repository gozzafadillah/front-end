<template>
  <v-container>
    <v-row>
      <v-col> Transactions: {{ transactions }} </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'TransactionPage',
  computed: {
    transactions() {
      return this.$store.getters['transactions/list']
    },
  },
  mounted() {
    this.fetchTransactions()
  },
  methods: {
    fetchTransactions() {
      this.$store.dispatch('transactions/fetchList')
    },
  },
}
</script>
