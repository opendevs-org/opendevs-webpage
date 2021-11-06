<template>
  <Layout page="me">
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="py-4">
            <h1 class="font-semibold text-5xl underline">the resum∈</h1>
          </div>
        </div>
      </div>
    </div>
    <iframe
      :src="data"
      width="100%"
      height="800px"
    >Loading...</iframe>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Resume",
    bodyAttrs: {
      class: "bg-night overflow-x-hidden",
    },
  },
  data() {
    return {
      username: null,
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
