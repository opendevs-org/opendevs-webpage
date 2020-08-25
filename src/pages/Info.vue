<template>
  <Layout page="info">
    <section class="info__blurb">
      <div v-html="data.description"></div>
      <ul>
        <li>
          <p>
            <a :href="`mailto:${data.contact.email}`">
              Email: {{ data.contact.email }}
            </a>
          </p>
        </li>
        <li>
          <p>
            <a :href="`https://github.com/${data.contact.github_handle}`">
              Github: {{ data.contact.github_handle }}
            </a>
          </p>
        </li>
      </ul>
    </section>
    <section class="info__blurb">
      <div><em>Contributers</em></div>
      <ul>
        <li>
          <em>Email:</em>
          <p>
            <a class="contributor" :href="`mailto:${data.contributer1.email}`">
              {{ data.contributer1.email }} </a
            >,
            <a class="contributor" :href="`mailto:${data.contributer2.email}`">
              {{ data.contributer2.email }}
            </a>
          </p>
        </li>
        <li>
          <em>Github:</em>
          <p>
            <a
              class="contributor"
              :href="`https://github.com/${data.contributer1.github_handle}`"
            >
              {{ data.contributer1.github_handle }} </a
            >,
            <a
              class="contributor"
              :href="`https://github.com/${data.contributer2.github_handle}`"
            >
              {{ data.contributer2.github_handle }}
            </a>
          </p>
        </li>
        <li>
          <em>Twitter:</em>
          <p>
            <a
              class="contributor"
              :href="`https://twitter.com/${data.contributer1.twitter_handle}`"
            >
              {{ data.contributer1.twitter_handle }} </a
            >,
            <a
              class="contributor"
              :href="`https://twitter.com/${data.contributer2.twitter_handle}`"
            >
              {{ data.contributer2.twitter_handle }}
            </a>
          </p>
        </li>
        <li>
          <em>LinkedIn:</em>
          <p>
            <a
              class="contributor"
              :href="
                `https://linkedin.com/in/${data.contributer1.linkedin_handle}`
              "
            >
              {{ data.contributer1.linkedin_handle }} </a
            >,
            <a
              class="contributor"
              :href="
                `https://linkedin.com/in/${data.contributer2.linkedin_handle}`
              "
            >
              {{ data.contributer2.linkedin_handle }}
            </a>
          </p>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Info",
      bodyAttrs: {
        style: `background-color: ${this.data.background_color}; color: ${
          this.data.text_color
        }`,
      },
    };
  },
  computed: {
    data: function() {
      return this.$page.metadata.infoData;
    },
  },
};
</script>

<page-query>
    query getInfoPageData {
        metadata {
            infoData {
                description
                contact {
                    email
                    github_handle
                }
                contributer1 {
                    email
                    twitter_handle
                    github_handle
                    linkedin_handle
                }
                contributer2 {
                    email
                    twitter_handle
                    github_handle
                    linkedin_handle
                }
                background_color
                text_color
            }
        }
    }
</page-query>

<style lang="scss">
.info__blurb {
  max-width: 800px;
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

@media (min-width: 768px) {
  .info__blurb {
    padding: 2rem;
  }
}

@media (min-width: 1440px) {
  .info__blurb {
    padding: 3rem;
  }
}
</style>
