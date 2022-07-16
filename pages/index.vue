<template>
  <v-container>
    <div class="container">
      <v-row>
        <v-col cols="7">
          <v-card height="467">
            <v-card-title> Sales </v-card-title>

            <v-sparkline
              :value="value"
              :gradient="gradient"
              :smooth="radius || false"
              :padding="padding"
              :line-width="width"
              :stroke-linecap="lineCap"
              :gradient-direction="gradientDirection"
              :fill="fill"
              :type="type"
              :auto-line-width="autoLineWidth"
              auto-draw
            ></v-sparkline>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card height="467">
            <v-card-title> Top Product </v-card-title>

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
        <v-col> </v-col>
      </v-row>
    </div>

    <div class="container">
      <v-row>
        <v-col cols="7">
          <v-card height="467">
            <v-card-title> Transactions </v-card-title>
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
                      <td
                        class="text-center"
                        v-if="item.status == 'In progress'"
                      >
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
      </v-row>
    </div>
  </v-container>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

export default {
  name: 'DashboardPage',
  middleware: ['auth'],
  data() {
    return {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
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
  },
  created() {},
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
