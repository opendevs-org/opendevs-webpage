<template>
  <div
    v-resize:debounce="onResize"
    class="relative flex flex-col w-screen mx-auto font-sans text-base max-w-1440 text-dawn md:flex-row"
  >
    <top-bar :shift="isIntroVisible" />
    <div
      v-observe-visibility="onIntroVisibilityChange"
      class="static flex flex-col justify-between w-full p-32 md:max-w-408 lg:max-w-496 md:fixed md:h-screen lg:py-88 lg:pl-88 md:pr-0"
    >
      <div class="flex flex-col">
        <div>
          <h1
            class="text-2xl font-bold leading-tight lg:text-4xl lg:leading-none text-zenith"
          >
            Hello, I’m Sarah Dayan.
          </h1>
          <div class="leading-loose">
            <p class="mt-32">
              I’m a Staff Software Engineer currently working as Tech Lead of
              the Doc Squad at
              <a
                class="underline text-zenith"
                href="https://www.algolia.com/"
                target="_blank"
                rel="noopener"
                >Algolia</a
              >. I mostly do front-end development, and I’m a
              <a
                class="underline text-zenith"
                href="https://vuejs.org/"
                rel="noopener"
                >Vue.js</a
              >
              and CSS nerd. I can't shut up about test-driven development and
              utility-first CSS. I also share what I learn on my blog
              <a
                class="underline text-zenith"
                href="http://frontstuff.io"
                target="_blank"
                rel="noopener"
                >frontstuff.io</a
              >, or at meetups and conferences.
            </p>
          </div>
        </div>
        <scroll-spy
          class="hidden mt-72 md:block"
          :active="active"
          :items="items"
        />
      </div>
      <div class="flex items-center w-full mt-32 md:mt-72">
        <g-image
          alt="Sarah Dayan's headshot"
          src="https://picsum.photos/350/165?random"
          class="w-48 h-48 mr-32 rounded-full"
        />
      </div>
    </div>
    <div
      class="static p-32 md:max-w-536 lg:max-w-736 md:absolute md:right-0 lg:py-88 lg:pr-88 md:pl-0"
    >
        <Layout>
          <ClientOnly>
            <div
              id="projects"
              v-observe-visibility="onVisibilityChange(0)"
              class="md:pt-88 md:-mt-96"
            >
              <h2
                class="sticky top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only text-zenith"
              >
                Projects
              </h2>
              <all-projects
                class="pt-32 pb-40 md:py-0"
                :items="$page.repositories.edges"
              />
            </div>
            <div
              id="talks"
              v-observe-visibility="onVisibilityChange(1)"
              class="md:pt-88"
            >
              <h2
                class="sticky top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only text-zenith"
              >
                Talks
              </h2>
              <all-talks class="pt-32 pb-40 md:py-0" :items="$page.talks.edges" />
            </div>
            <div
              id="interviews"
              v-observe-visibility="onVisibilityChange(2)"
              class="mb-48 md:pt-8"
            >
              <h2
                class="sticky top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only text-zenith"
              >
                Interviews
              </h2>
              <all-interviews
                class="pt-80 md:pt-0 md:mt-72"
                :items="$page.interviews.edges"
              />
            </div>
            <p
              v-observe-visibility="showDesignerLine"
              :class="[
                shouldShowDesignerLine ? 'opacity-75' : 'opacity-0 shift-y-16',
              ]"
              class="text-sm mt-104 ml-104 md:ml-160 transition"
            >
              Design by
              <a
                class="text-sunrise hover:text-zenith transition hover:underline"
                href="https://dribbble.com/NicolasMzrd"
                target="_blank"
                rel="noopener"
                >Nicolas Meuzard</a
              >.
            </p>
          </ClientOnly>
        </Layout>
    </div>
    <div
      class="fixed bottom-0 left-0 z-20 w-full h-32 pointer-events-none gradient-y-transparent-night"
    />
    <div
      class="fixed top-0 left-0 z-20 w-full h-32 pointer-events-none gradient-y-night-transparent"
    />
  </div>
</template>

<script>
import ScrollSpy from '../../partials/ScrollSpy';
import TopBar from '../../partials/TopBar';
import AllProjects from '../../partials/AllProjects';
import AllTalks from '../../partials/AllTalks';
import AllInterviews from '../../partials/AllInterviews';
export default {
  components: {
    ScrollSpy,
    TopBar,
    AllProjects,
    AllTalks,
    AllInterviews,
  },
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
