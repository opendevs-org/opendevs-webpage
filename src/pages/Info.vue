<template>
    <Layout page="info">
        <section class="info__blurb">
            <div v-html="data.description"></div>
            <ul>
                <li>
                    <p>
                        <a :href="`mailto:${data.contact.email}`">
                            Email: {{ data.contact.email}}
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
            <div><i>Contributers</i></div>
            <ul>
                <li>
                    <p>
                        <a :href="`mailto:${data.contributer1.email}`">
                            Email: {{ data.contributer1.email}}
                        </a>,
                        <a :href="`mailto:${data.contributer2.email}`">
                            {{ data.contributer2.email}}
                        </a>
                    </p>
                </li>
                <li>
                    <p>
                        <a :href="`https://github.com/${data.contributer1.github_handle}`">
                            Github: {{ data.contributer1.github_handle }}
                        </a>,
                        <a :href="`https://github.com/${data.contributer2.github_handle}`">
                            {{ data.contributer2.github_handle }}
                        </a>
                    </p>
                </li>
                <li>
                    <p>
                        <a :href="`https://twitter.com/${data.contributer1.twitter_handle}`">
                            Twitter: {{ data.contributer1.twitter_handle }}
                        </a>,
                        <a :href="`https://twitter.com/${data.contributer2.twitter_handle}`">
                            {{ data.contributer2.twitter_handle }}
                        </a>
                    </p>
                </li>
                <li>
                    <p>
                        <a :href="`https://linkedin.com/in/${data.contributer1.linkedin_handle}`">
                            LinkedIn: {{ data.contributer1.linkedin_handle }}
                        </a>,
                        <a :href="`https://linkedin.com/in/${data.contributer2.linkedin_handle}`">
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
			title: 'Info',
			bodyAttrs: {
				style: `background-color: ${this.data.background_color}; color: ${this.data.text_color}`
			}
		};
	},
	computed: {
		data: function() {
			return this.$page.metaData.infoData;
		}
	}
};
</script>

<page-query>
    query getInfoPageData {
        metaData {
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
    }

    @media (min-width: 768px) {
        .info__blurb {
            padding: 2rem;
        }
    }

    @media(min-width: 1440px) {
        .info__blurb {
            padding: 3rem;
        }
    }
</style>
