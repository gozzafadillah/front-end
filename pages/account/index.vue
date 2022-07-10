<template>
  <div>
    Categories
    {{ categories }}
  </div>
</template>
<script>
export default {
  name: 'AccountPage',
  data() {
    return {
      categories: [],
    }
  },
  created() {
    const token = this.$store.state.auth.token
    if (token) {
      this.token = token
      console.log(this.token)
    }
  },
  mounted() {
    this.getCategories()
    //   this.$store.getters['auth/isToken']
    //     ? this.getCategories()
    //     : this.$router.push('/login')
  },
  methods: {
    getCategories() {
      this.$axios
        .post('/api/products')
        .then((response) => {
          this.categories = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  // async fetch() {
  //   this.categories = await fetch(
  //     'https://920f-2001-448a-3021-3e9e-c8da-7b59-2dfb-8a32.ap.ngrok.io/category'
  //   ).then((res) => res.json())
  // },
}
</script>
