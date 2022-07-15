<template>
  <div>
    <h1>Category {{ id }}</h1>
  </div>
</template>
<script>
export default {
  name: 'DetailCategoriesPage',
  data() {
    return {}
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>
