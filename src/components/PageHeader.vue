<template>
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="py-4">
            <h1 class="font-semibold text-5xl underline">{{ title }}</h1>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
