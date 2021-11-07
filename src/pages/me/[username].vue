<template>
  <Layout page="me">
    <PageHeader title="the résumé" />
    <LoadingSpinner v-if="show" />
    <iframe
      :src="data"
      width="100%"
      height="800px"
      @load="load"
    >Loading...</iframe>
  </Layout>
</template>

<script>
import PageHeader from '../../components/PageHeader.vue'
import LoadingSpinner from '../../components/LoadingSpinner.vue'

export default {
  components: { PageHeader, LoadingSpinner },
  metaInfo: {
    title: "Resume",
    bodyAttrs: {
      class: "bg-night overflow-x-hidden",
    },
  },
  data() {
    return {
      username: null,
      show: true,
    }
  },
  computed: {
    data() {
      if (this.$page.person.edges) {
        return this.$page.person.edges[0].node.resumeURL
      } else {
        return {}
      }
    },
  },
  watch: {
    data(val) {
      if (!val) {
        this.$router.push("/")
      }
    },
  },
  methods: {
    load() {
      this.show = false
    }
  }
}
</script>

<page-query>
query ($username: String) {
	person: allTeam(filter: { username: { eq: $username } }) {
    edges {
      node {
        resumeURL
        username
      }
    }
  }
}
</page-query>
