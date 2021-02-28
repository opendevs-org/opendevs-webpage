<template>
  <Layout page="me"> </Layout>
</template>

<script>
export default {
  metaInfo: {
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
        return this.$page.person.edges[0].node
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
	person: allPeople(filter: { username: { eq: $username } }) {
    edges {
      node {
        name
        username
        intro
        email
        avatar
        quote
        github_handle
        linkedin_handle
        twitter_handle
        # talks {
        #  title
        #  event
        #  isOnline
        #  date
        #  links {
        #    label
        #    link
        #  }
        #}
        #projects {
        #  name
        #  featured
        #  links {
        #    label
        #    link
        #  }
        #}
        #achievements {
        #  title
        #  description
        #}
        #programs {
        #  title
        #  description
        #  links {
        #    label
        #    link
        #  }
        #}
      }
    }
  }
}
</page-query>
