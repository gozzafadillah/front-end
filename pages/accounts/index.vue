<template>
  <div>
    <h1>Account</h1>
    <ul v-for="(account, index) in accounts" :key="(account.ID, index)">
      <li>{{ account.Name }}</li>
      <li>{{ account.Name }}</li>
    </ul>
  </div>
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
    accounts() {
      return this.$store.getters['customers/list']
    },
  },
  mounted() {
    this.getAccounts()
  },
  methods: {
    async getAccounts() {
      await this.$store.dispatch('customers/fetchList')
    },
  },
}
</script>
