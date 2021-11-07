<template>
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
        v-if="category === 'member'"
        @click="genericCardMethod"
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
        v-for="{ node } in data"
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
</template>

<script>
export default {
  name: "TeamList",
  props: {
    data: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    genericCardMethod: {
      type: Function,
      required: false,
    }
  },
}
</script>

<style scoped>
</style>
