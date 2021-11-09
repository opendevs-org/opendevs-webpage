<template>
  <Layout page="team">
    <PageHeader title="the craftsmen" />
    <TeamList category="member" :data="data.member" :genericCardMethod="scrollMeTo" />
    <PageHeader title="the founders" />
    <TeamList category="founder" :data="data.founder" />
    <div ref="joinus" />
    <PageHeader title="wanna join?" />
    <LoadingSpinner v-if="show" />
    <div class="p-8 flex items-center justify-center people-card-section">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScZH-SxBkSNr0ftL4wuuddwsJ5qcdxccMwzmJwiq-uxa-drVA/viewform?embedded=true"
        width="740"
        height="724"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        @load="load"
        >Loading…</iframe
      >
    </div>
  </Layout>
</template>

<script>
import PageHeader from "../components/PageHeader.vue"
import LoadingSpinner from "../components/LoadingSpinner.vue"
import TeamList from "../components/TeamList.vue"

export default {
  components: { PageHeader, LoadingSpinner, TeamList },
  metaInfo() {
    return {
      title: "Team",
    }
  },
  data() {
    return {
      show: true,
    }
  },
  computed: {
    data() {
      return this.$page && this.$page.allTeam && this.$page.allTeam.edges
        ? {
          founder: this.$page.allTeam.edges.filter(
            (elem) => elem.node.designation === "founder"
          ),
          member: this.$page.allTeam.edges.filter(
            (elem) => elem.node.designation !== "founder"
          ),
        }
        : {
          founder: [],
          member: [],
        }
    },
  },
  methods: {
    load() {
      this.show = false
    },
    scrollMeTo() {
      let element = this.$refs.joinus
      if (element) {
        let top = element.offsetTop
        window.scrollTo(0, top)
      }
    }
  },
}
</script>

<page-query>
query {
	allTeam {
    edges {
      node {
        name
        email
        avatar
        quote
        github_handle
        linkedin_handle
        twitter_handle
        username
        designation
      }
    }
  }
}
</page-query>

<style lang="scss">
.people-card-section {
  background-color: #e2e8f0;

  .ellipsis {
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .height-100 {
    height: 100%;
  }
}
</style>
