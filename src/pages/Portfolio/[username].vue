<template>
  <Layout page="portfolio">
    <h1>{{ username }}</h1>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      username: null
    };
  },
  async mounted() {
    const { username } = this.$route.params;
    this.username = username;
  }
};
</script>
