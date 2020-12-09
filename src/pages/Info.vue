<template>
  <Layout page="info">
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="py-4">
            <h1 class="font-semibold text-5xl underline">the craftsmen</h1>
          </div>
        </div>
      </div>
    </div>
    <div
      class="p-8 flex items-center justify-center info-card-section"
    >
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        <div v-for="member in data" :key="member.email" class="shadow-xl transform transition duration-500 hover:scale-105">
          <div
            class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg height-100"
          >
            <div
              class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40"
            >
              <img
                :src="member.avatar"
                alt=""
                class="h-full w-full"
              />
            </div>

            <h2 class="mt-4 font-bold text-xl">{{ member.name }}</h2>

            <p class="text-xs text-gray-500 text-center mt-3 ellipsis">
             {{ member.quote }}
            </p>

            <ul class="flex flex-row mt-4 space-x-2">
              <li>
                <a
                  v-if="member.email"
                  target="_blank"
                  :href="member.email"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fas', 'envelope']"
                /></a>
              </li>
              <li>
                <a
                  v-if="member.github_handle"
                  target="_blank"
                  :href="member.github_handle"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fab', 'github']"
                /></a>
              </li>
              <li>
               <a
                  v-if="member.linkedin_handle"
                  target="_blank"
                  :href="member.linkedin_handle"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fab', 'linkedin']"
                /></a>
              </li>
              <li>
                <a
                  v-if="member.twitter_handle"
                  target="_blank"
                  :href="member.twitter_handle"
                  class="brand-icon text-green-400"
                  ><font-awesome :icon="['fab', 'twitter']"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Info',
      bodyAttrs: {
        style: `background-color: ${this.data.background_color}; color: ${this.data.text_color}`,
      },
    };
  },
  computed: {
    data: function () {
      return this.$page.metadata.infoData;
    },
  },
};
</script>

<page-query>
    query getInfoPageData {
        metadata {
            infoData {
              name
              email
              avatar
              quote
              github_handle
              linkedin_handle
              twitter_handle
            }
        }
    }
</page-query>

<style lang="scss">
.info__blurb {
  padding: 1.5rem 1.25rem;
  p {
    font-size: 1.4rem;
  }

  div {
    margin-bottom: 20px;
  }

  .contributor {
    font-size: medium;
  }
}

.info-card-section {

  background-color: #e2e8f0;
  min-height: calc(100vh - 153.31px);

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
