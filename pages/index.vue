<template>
  <v-container>
    <v-row dense wrap>
      <v-col cols="12" xs="6" sm="6" md="3">
        <DashboardCard icon="mdi-account" title="Admins" :count="1" />
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="3">
        <DashboardCard
          icon="mdi-account-multiple"
          title="Customers"
          :count="countCustomers"
        />
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="3">
        <DashboardCard
          title="Transactions"
          icon="mdi-swap-horizontal"
          :count="countTransactions"
        />
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="3">
        <DashboardCard
          title="Products"
          icon="mdi-cube"
          :count="countProducts"
        />
      </v-col>
    </v-row>

    <v-row dense wrap class="my-16">
      <v-col cols="12" md="7">
        <v-card height="450">
          <v-card-title class="font-weight-bold">Transactions</v-card-title>
          <v-card-subtitle>
            This is a list of latest transactions.
          </v-card-subtitle>
          <template>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Transactions</th>
                    <th class="text-left">Date & Time</th>
                    <th class="text-left">Amount</th>
                    <th class="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in dataTransactions" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.date }}</td>
                    <td>${{ item.amount }}</td>
                    <td class="text-center" v-if="item.status == 'Completed'">
                      <div class="completed">
                        {{ item.status }}
                      </div>
                    </td>
                    <td class="text-center" v-if="item.status == 'Cancelled'">
                      <div class="cancelled">
                        {{ item.status }}
                      </div>
                    </td>
                    <td class="text-center" v-if="item.status == 'In progress'">
                      <div class="inProgress">
                        {{ item.status }}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>
        </v-card>
      </v-col>

      <v-col cols="12" md="5">
        <v-card height="450">
          <v-card-title class="font-weight-bold">Top Product</v-card-title>
          <template>
            <v-simple-table>
              <template v-slot:default>
                <tbody>
                  <tr v-for="item in dataTopProduct" :key="item.name">
                    <td class="py-2">
                      <h4>
                        {{ item.name }}
                      </h4>
                      <div class="body-2">
                        {{ item.category }}
                      </div>
                    </td>
                    <td>
                      <h3 class="text-right">{{ item.sales }} Sales</h3>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>
        </v-card>
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col cols="5">
        <v-card height="467">
          <v-card-title> Top User </v-card-title>
          <template>
            <v-simple-table>
              <template v-slot:default>
                <tbody>
                  <tr v-for="item in dataTopUser" :key="item.name">
                    <td class="py-2">
                      <h4>
                        {{ item.name }}
                      </h4>
                      <div class="body-2">
                        {{ item.category }}
                      </div>
                    </td>
                    <td>
                      <h3 class="text-right">
                        {{ item.transaction }} Transaction
                      </h3>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  name: 'DashboardPage',
  middleware: ['auth'],
  data() {
    return {
      search: '',
      calories: '',
      transactions: [
        {
          transaction: 'Bonnie Green',
          date_time: 'Apr 23 ,2021',
          amount: '$2300',
          status: 'PAID',
        },
        {
          transaction: '',
          date_time: '',
          amount: '',
          status: 'EXPIRED',
        },
        {
          transaction: '',
          date_time: '',
          amount: '',
          status: 'PENDING',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Dashboard Page',
    }
  },
  computed: {
    dataTopProduct() {
      return this.$store.getters['dashboard/isDataTopProduct']
    },
    dataTopUser() {
      return this.$store.getters['dashboard/isDataTopUser']
    },
    dataTransactions() {
      return this.$store.getters['dashboard/isDataTransactions']
    },
    countCustomers() {
      return this.$store.getters['accounts/countList']
    },
    countTransactions() {
      return this.$store.getters['transactions/countList']
    },
    countProducts() {
      return this.$store.getters['products/countList']
    },
  },
  mounted() {
    this.fetchListCustomers()
    this.fetchListTransactions()
    this.fetchListProducts()
  },
  methods: {
    getAuthenticated() {
      const authStatus = this.$store.dispatch.getters(['auth/isAuthenticated'])

      if (authStatus === true) {
        return this.$toast.open({
          message: 'You are logged in',
          type: 'success',
        })
      }
    },
    async fetchListCustomers() {
      await this.$store.dispatch('customers/fetchList')
    },
    async fetchListTransactions() {
      await this.$store.dispatch('transactions/fetchList')
    },
    async fetchListProducts() {
      await this.$store.dispatch('products/fetchList')
    },
  },
}
</script>

<style scoped>
/* .container {
  background-color: #fff;
} */
.completed {
  background-color: #def7ec;
  padding: 4px;
  border-radius: 6px;
}
.cancelled {
  background-color: #fbd5d5;
  padding: 4px;
  border-radius: 6px;
}
.inProgress {
  background-color: #e1effe;
  padding: 4px;
  border-radius: 6px;
}
</style>
