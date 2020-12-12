<template>
  <ul class="flex -mx-16 text-zenith">
    <li v-for="({ link, label, icon }, id) in links" :key="id" class="mx-16">
      <a class="flex items-center" :href="link" rel="noopener" target="_blank">
        <component
          :is="icon"
          aria-hidden="true"
          class="w-16 h-16 mr-16 fill-current"
        />
        <span class="mt-px">{{ label }}</span>
        <div class="w-16 p-2 ml-8">
          <external-link-icon
            aria-hidden="true"
            class="flex-none stroke-current"
          />
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          label: "Twitter",
          link: "https://twitter.com/frontstuff_io",
        },
        {
          label: "GitHub",
          link: "https://github.com/sarahdayan/",
        },
      ],
    };
  },
};
</script>
