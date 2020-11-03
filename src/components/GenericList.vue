<template>
  <div>
    <template v-for="(item, key) in items">
      <slot name="item" :item="{ ...item, key }" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
