// State
export const state = () => ({
  dataTopProduct: [
    {
      name: 'Listrik',
      category: 'Payment',
      sales: 70,
    },
    {
      name: 'Pulsa',
      category: 'Payment',
      sales: 54,
    },
    {
      name: 'Top Up Shopee Pay',
      category: 'Top up',
      sales: 47,
    },
    {
      name: 'Internet',
      category: 'Payment',
      sales: 43,
    },
    {
      name: 'Transfer BRI',
      category: 'Top up',
      sales: 47,
    },
    {
      name: 'Top Up Dana',
      category: 'Top up',
      sales: 22,
    },
  ],
  dataTopUser: [
    {
      name: 'Slamet',
      category: 'Payment',
      transaction: 70,
    },
    {
      name: 'Yanto',
      category: 'Payment',
      transaction: 54,
    },
    {
      name: 'Budi',
      category: 'Top up',
      transaction: 47,
    },
    {
      name: 'Kristin',
      category: 'Payment',
      transaction: 43,
    },
    {
      name: 'Farhan',
      category: 'Top up',
      transaction: 47,
    },
    {
      name: 'Nurdin',
      category: 'Top up',
      transaction: 22,
    },
  ],
  dataTransactions: [
    {
      name: 'Payment from Nanda',
      date: 'Apr 23, 2021',
      amount: 2300,
      status: 'Completed',
    },
    {
      name: 'Payment refund Alfath',
      date: 'Apr 23, 2021',
      amount: 2300,
      status: 'Completed',
    },
    {
      name: 'Payment from Reza',
      date: 'Apr 23, 2021',
      amount: -670,
      status: 'Completed',
    },
    {
      name: 'Payment failed Gisel',
      date: 'Apr 18  2021',
      amount: 234,
      status: 'Cancelled',
    },
    {
      name: 'Payment from Fadhil',
      date: 'Apr 15, 2021',
      amount: 5000,
      status: 'In progress',
    },
    {
      name: 'Payment from Ghilman',
      date: 'Apr 15, 2021',
      amount: 2300,
      status: 'In progress',
    },
    {
      name: 'Payment from Alam',
      date: 'Apr 15, 2021',
      amount: 2300,
      status: 'In progress',
    },
  ],
})

// Getters
export const getters = {
  isDataTopProduct: (state) => state.dataTopProduct,
  isDataTopUser: (state) => state.dataTopUser,
  isDataTransactions: (state) => state.dataTransactions,
}

// Mutations
export const mutations = {
  setDataTopProduct(state, param) {
    state.dataTopProduct = param
  },
  setDataTopUser(state, param) {
    state.dataTopUser = param
  },
  setDataTransactions(state, param) {
    state.dataTransactions = param
  },
}

// Actions
export const actions = {}
