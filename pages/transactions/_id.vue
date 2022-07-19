<template>
  <v-container class="pa-4">
    <v-row justify="space-around" align="center">
      <v-col cols="12">
        <div class="font-weight-bold">Invoice</div>
        No: {{ detailByPaymentId.external_id }}
      </v-col>
      <v-col></v-col>
    </v-row>

    <v-row class="pa-16">
      <v-col cols="12" md="8">
        <v-card color="#" flat>
          <div>
            <div class="text-h3 font-weight-bold"></div>
            <a :href="detailByPaymentId.invoice_url"> Check </a>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" flat>
          <v-card-subtitle>
            <span class="font-weight-bold">Customer Details</span>
          </v-card-subtitle>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                {{ customerTransaction.given_names }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ customerTransaction.email }} |
                {{ customerTransaction.mobile_number }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
              round
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
          <v-card-title> </v-card-title>
          <div></div>
          <div></div>
          <div></div>
        </v-card>
      </v-col>
    </v-row>

    <div style="color: red">{{ detailByPaymentId.status }}</div>

    <div>
      Items Transaction:
      <ul v-for="(item, index) in itemsTransaction" :key="(item.name, index)">
        <li>{{ item.name }}</li>
        <li>{{ item.price }}</li>
        <li>{{ item.category }}</li>
        <li>{{ item.quantity }}</li>
      </ul>
    </div>
  </v-container>
</template>
<script>
export default {
  name: 'InvoicePage',
  head() {
    return {
      title: 'Invoice Page',
    }
  },
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
