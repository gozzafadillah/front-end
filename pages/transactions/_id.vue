<template>
  <div>
    <div>
      Detail Transaction
      <div>
        <a :href="detailByPaymentId.invoice_url">Invoice</a>
      </div>
      <div style="color: red">{{ detailByPaymentId.status }}</div>
    </div>
    <div>
      Customers:
      <ul>
        <li>{{ customerTransaction.given_names }}</li>
        <li>{{ customerTransaction.email }}</li>
        <li>{{ customerTransaction.mobile_number }}</li>
      </ul>
    </div>
    <div>
      Items Transaction:
      <ul v-for="(item, index) in itemsTransaction" :key="(item.name, index)">
        <li>{{ item.name }}</li>
        <li>{{ item.price }}</li>
        <li>{{ item.category }}</li>
        <li>{{ item.quantity }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductDetailPage',
  computed: {
    id() {
      return this.$route.params.id
    },
    detailByPaymentId() {
      return this.$store.getters['transactions/detail']
    },
    customerTransaction() {
      return this.$store.getters['transactions/customer']
    },
    itemsTransaction() {
      return this.$store.getters['transactions/items']
    },
  },
  mounted() {
    this.$store.dispatch('transactions/fetchDetailByPaymentId', this.id)
  },
}
</script>
