<template>
  <Layout page="portfolio">
    <div
      class="static flex flex-col justify-between p-32 md:max-w-408 lg:max-w-496 md:fixed md:h-screen lg:py-88 lg:pl-88 md:pr-0"
    >
      <div class="flex flex-col">
        <h1
          class="text-2xl font-bold leading-tight lg:text-4xl lg:leading-none text-zenith"
        >
          hello, i’m {{ data.name }}.
        </h1>
        <div>
          <p class="mt-12" v-html="data.intro" />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="shadow-xl w-408">
          <div
            class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg height-100"
          >
            <div
              class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40"
            >
              <img :src="data.avatar" alt="" class="h-full w-full" />
            </div>

            <p class="text-xs text-gray-500 text-center mt-3 ellipsis">
              {{ data.quote }}
            </p>

            <ul class="flex flex-row mt-4 space-x-2">
              <li>
                <a
                  v-if="data.email"
                  target="_blank"
                  :href="data.email"
                  class="brand-icon"
                  ><font-awesome :icon="['fas', 'envelope']"
                /></a>
              </li>
              <li>
                <a
                  v-if="data.github_handle"
                  target="_blank"
                  :href="data.github_handle"
                  class="brand-icon"
                  ><font-awesome :icon="['fab', 'github']"
                /></a>
              </li>
              <li>
                <a
                  v-if="data.linkedin_handle"
                  target="_blank"
                  :href="data.linkedin_handle"
                  class="brand-icon"
                  ><font-awesome :icon="['fab', 'linkedin']"
                /></a>
              </li>
              <li>
                <a
                  v-if="data.twitter_handle"
                  target="_blank"
                  :href="data.twitter_handle"
                  class="brand-icon"
                  ><font-awesome :icon="['fab', 'twitter']"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="data.projects" id="projects">
          <h2
            class="pt-24 text-sm font-bold tracking-widest uppercase md:sr-only text-zenith"
          >
            Projects
          </h2>
          <all-projects class="pb-40 md:py-0" :items="data.projects" />
        </div>
        <div v-if="data.talks" id="data.talks">
          <h2
            class="pt-24 text-sm font-bold tracking-widest uppercase md:sr-only text-zenith"
          >
            Talks
          </h2>
          <all-talks class="pb-40 md:py-0" :items="data.talks" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import AllProjects from "../../partials/AllProjects";
import AllTalks from "../../partials/AllTalks";
export default {
  metaInfo: {
    bodyAttrs: {
      class: "bg-night overflow-x-hidden",
    },
  },
  components: {
    AllProjects,
    AllTalks,
  },
  data() {
    return {
      username: null,
      items: [
        { label: "Projects", link: "#projects" },
        { label: "Talks", link: "#talks" },
      ],
    };
  },
  computed: {
    data() {
      if (this.$page.person.edges) {
        return this.$page.person.edges[0].node;
      } else {
        return {};
      }
    },
  },
  watch: {
    data(val) {
      if (!val) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<page-query>
query ($username: String!) {
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
      talks {
        title
        event
        isOnline
        date
        links {
          label
          link
        }
      }
      projects {
        name
        featured
      }
      }
    }
  }
}
</page-query>
