<template>
  <article
    class="bg-dusk transition md:group-hover:opacity-50 md:hover:opacity-important md:hover:scale-11/10x"
    itemscope
    itemtype="http://schema.org/CreativeWork"
  >
    <a
      class="block p-40"
      v-if="project && project.link"
      :href="project.link"
      target="_blank"
      rel="noopener"
    >
      <p class="text-xs font-bold tracking-widest uppercase text-zenith">
        {{ project.language }}
      </p>
      <h3
        class="mt-8 text-lg font-semibold leading-tight text-zenith"
        itemprop="name"
      >
        {{ project.title }}
      </h3>
      <p class="mt-8">{{ project.description }}</p>
      <div class="flex items-center mt-16">
        <div class="w-16 h-16 p-2 mr-4">
          <star-icon
            aria-hidden="true"
            class="w-full h-full -mt-px fill-current"
          />
        </div>
        <span class="mt-2 text-xs font-semibold leading-none tracking-wider">
          {{ formattedCount(project.stars) }}
          <span class="sr-only">stars</span>
        </span>
      </div>
    </a>
  </article>
</template>

<script>
import formattedCount from "../utils/count";

export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formattedCount,
  },
};
</script>
