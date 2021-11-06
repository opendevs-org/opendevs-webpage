<template>
  <Layout page="team">
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="py-4">
            <h1 class="font-semibold text-5xl underline">the craftsmen</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="p-8 flex items-center justify-center people-card-section">
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          xl:grid-cols-3
          cursor-pointer
          gap-6
        "
      >
        <div
          class="shadow-xl transform transition duration-500 hover:scale-105"
          @click="scrollMeTo('joinus')"
        >
          <div
            class="
              flex flex-col
              items-center
              justify-center
              bg-white
              p-4
              shadow
              rounded-lg
              height-100
            "
          >
            <div
              class="
                inline-flex
                shadow-lg
                border border-gray-200
                rounded-full
                overflow-hidden
                h-40
                w-40
              "
            >
              <img src="/you.png" alt="" class="h-full w-full" />
            </div>

            <h2 class="mt-4 font-bold text-xl underline">you ?</h2>

            <p class="text-xs text-gray-500 text-center mt-3 ellipsis">
              quote that defines you?
            </p>
          </div>
        </div>
        <div
          v-for="{ node } in memberData"
          :key="node.username"
          @click="$router.push(`/me/${node.username}`)"
          class="shadow-xl transform transition duration-500 hover:scale-105"
        >
          <div
            class="
              flex flex-col
              items-center
              justify-center
              bg-white
              p-4
              shadow
              rounded-lg
              height-100
            "
          >
            <div
              class="
                inline-flex
                shadow-lg
                border border-gray-200
                rounded-full
                overflow-hidden
                h-40
                w-40
              "
            >
              <img :src="node.avatar" alt="" class="h-full w-full" />
            </div>

            <h2 class="mt-4 font-bold text-xl underline">{{ node.name }}</h2>

            <p class="text-xs text-gray-500 text-center mt-3 ellipsis">
              {{ node.quote }}
            </p>

            <ul class="flex flex-row mt-4 space-x-2">
              <li>
                <a
                  v-if="node.email"
                  target="_blank"
                  :href="node.email"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fas', 'envelope']"
                /></a>
              </li>
              <li>
                <a
                  v-if="node.github_handle"
                  target="_blank"
                  :href="node.github_handle"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fab', 'github']"
                /></a>
              </li>
              <li>
                <a
                  v-if="node.linkedin_handle"
                  target="_blank"
                  :href="node.linkedin_handle"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fab', 'linkedin']"
                /></a>
              </li>
              <li>
                <a
                  v-if="node.twitter_handle"
                  target="_blank"
                  :href="node.twitter_handle"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fab', 'twitter']"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="py-4">
            <h1 class="font-semibold text-5xl underline">the founders</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="p-8 flex items-center justify-center people-card-section">
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          xl:grid-cols-2
          cursor-pointer
          gap-6
        "
      >
        <div
          v-for="{ node } in founderData"
          :key="node.username"
          @click="$router.push(`/me/${node.username}`)"
          class="shadow-xl transform transition duration-500 hover:scale-105"
        >
          <div
            class="
              flex flex-col
              items-center
              justify-center
              bg-white
              p-4
              shadow
              rounded-lg
              height-100
            "
          >
            <div
              class="
                inline-flex
                shadow-lg
                border border-gray-200
                rounded-full
                overflow-hidden
                h-40
                w-40
              "
            >
              <img :src="node.avatar" alt="" class="h-full w-full" />
            </div>

            <h2 class="mt-4 font-bold text-xl underline">{{ node.name }}</h2>

            <p class="text-xs text-gray-500 text-center mt-3 ellipsis">
              {{ node.quote }}
            </p>

            <ul class="flex flex-row mt-4 space-x-2">
              <li>
                <a
                  v-if="node.email"
                  target="_blank"
                  :href="node.email"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fas', 'envelope']"
                /></a>
              </li>
              <li>
                <a
                  v-if="node.github_handle"
                  target="_blank"
                  :href="node.github_handle"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fab', 'github']"
                /></a>
              </li>
              <li>
                <a
                  v-if="node.linkedin_handle"
                  target="_blank"
                  :href="node.linkedin_handle"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fab', 'linkedin']"
                /></a>
              </li>
              <li>
                <a
                  v-if="node.twitter_handle"
                  target="_blank"
                  :href="node.twitter_handle"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fab', 'twitter']"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div ref="joinus" class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="py-4">
            <h1 class="font-semibold text-5xl underline">wanna join?</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="p-8 flex items-center justify-center people-card-section">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScZH-SxBkSNr0ftL4wuuddwsJ5qcdxccMwzmJwiq-uxa-drVA/viewform?embedded=true"
        width="740"
        height="724"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Loading…</iframe
      >
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Team",
      bodyAttrs: {
        style: `background-color: ${this.founderData.background_color}; color: ${this.founderData.text_color}`,
      },
    }
  },
  computed: {
    memberData() {
      if (this.$page && this.$page.allTeam && this.$page.allTeam.edges) {
        return this.$page.allTeam.edges.filter(
          (elem) => elem.node.designation !== "founder"
        )
      } else {
        return {}
      }
    },
    founderData() {
      if (this.$page && this.$page.allTeam && this.$page.allTeam.edges) {
        return this.$page.allTeam.edges.filter(
          (elem) => elem.node.designation === "founder"
        )
      } else {
        return {}
      }
    },
  },
  watch: {
    founderData(val) {
      if (!val) {
        this.$router.push("/")
      }
    },
  },
  methods: {
    scrollMeTo(refName) {
      let element = this.$refs[refName]
      let top = element.offsetTop
      window.scrollTo(0, top)
    }
  }
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
  // min-height: calc(100vh - 153.31px);

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
