<template>
  <v-app>
    <div class="container">
        <v-row>
            <v-col cols="7">
                <v-card
                 height="467"
                >
                    <v-card-title>
                        Sales
                    </v-card-title>
                </v-card>
            </v-col>
            <v-col cols="5">
                <v-card
                 height="467"
                >
                <v-card-title>
                    Top Product
                </v-card-title>          
                
                <template>
                <v-simple-table>
                    <template v-slot:default>
                    <tbody>
                        <tr
                         v-for="item in dataTopProduct"
                         :key="item.name"
                        >
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
                                {{ item.sales }} Sales
                            </h3>
                        </td>
                        
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                </template>
                </v-card>
            </v-col>
            <v-col>
            </v-col>
        </v-row>
    </div>

    <div class="container">
        <v-row>
            <v-col cols="7">
                <v-card
                 height="467"
                >
                <v-card-title>
                    Transactions
                </v-card-title>          
                <v-card-subtitle>
                    This is a list of latest transactions.
                </v-card-subtitle>

<template>
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Transactions
                        </th>
                        <th class="text-left">
                            Date & Time
                        </th>
                        <th class="text-left">
                            Amount
                        </th>
                        <th class="text-left">
                            Status
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in dataTransactions"
                        :key="item.name"
                        >
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
            
            
            <v-col cols="5">
                <v-card
                 height="467"
                >
                <v-card-title>
                    Top User
                </v-card-title>          
                
                <template>
                <v-simple-table>
                    <template v-slot:default>
                    <tbody>
                        <tr
                         v-for="item in dataTopUser"
                         :key="item.name"
                        >
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
        
  </v-app>
</template>

<script>
export default {
    name: 'DashboardAdmin',
    data () {
      return {
        drawer: false,
        itemsDrawer: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Admin', icon: 'mdi-account' },
          { title: 'Product', icon: 'mdi-cube' },
        ],
        dataTopProduct: [
            {
                name: 'Listrik', 
                category: 'Payment',
                sales: 70
            },
            {
                name: 'Pulsa', 
                category: 'Payment',
                sales: 54
            },
            {
                name: 'Top Up Shopee Pay', 
                category: 'Top up',
                sales: 47
            },
            {
                name: 'Internet', 
                category: 'Payment',
                sales: 43
            },
            {
                name: 'Transfer BRI', 
                category: 'Top up',
                sales: 47
            },
            {
                name: 'Top Up Dana', 
                category: 'Top up',
                sales: 22
            },
            
        ],
        dataTopUser: [
            {
                name: 'Slamet', 
                category: 'Payment',
                transaction: 70
            },
            {
                name: 'Yanto', 
                category: 'Payment',
                transaction: 54
            },
            {
                name: 'Budi', 
                category: 'Top up',
                transaction: 47
            },
            {
                name: 'Kristin', 
                category: 'Payment',
                transaction: 43
            },
            {
                name: 'Farhan', 
                category: 'Top up',
                transaction: 47
            },
            {
                name: 'Nurdin', 
                category: 'Top up',
                transaction: 22
            },
            
        ],
        dataTransactions: [
            {
                name: 'Payment from Bonnie Green', 
                date: 'Apr 23, 2021',
                amount: 2300,
                status: 'Completed'
            },
            {
                name: 'Payment refund to #00910', 
                date: 'Apr 23, 2021',
                amount: 2300,
                status: 'Completed'
            },
            {
                name: 'Payment from Bonnie Green', 
                date: 'Apr 23, 2021',
                amount: -670,
                status: 'Completed'
            },
            {
                name: 'Payment failed from #087651', 
                date: 'Apr 18  2021',
                amount: 234,
                status: 'Cancelled'
            },
            {
                name: 'Payment from Bonnie Green', 
                date: 'Apr 15, 2021',
                amount: 5000,
                status: 'In progress'
            },
            {
                name: 'Payment from Bonnie Green', 
                date: 'Apr 15, 2021',
                amount: 2300,
                status: 'In progress'
            }
        ]
      }
    },
}
</script>

<style scoped>
    .container {
        background-color: #fff;
    }
    .completed {
        background-color: #DEF7EC;
        padding: 4px;
        border-radius: 6px;
    }
    .cancelled {
        background-color: #FBD5D5;
        padding: 4px;
        border-radius: 6px;
    }
    .inProgress {
        background-color: #E1EFFE;
        padding: 4px;
        border-radius: 6px;
    }

</style>