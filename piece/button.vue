<template>
  <nuxt-link
    v-bind:to="link"
    v-if="scope == ''"
    class="rounded-md flex bg-base-16 tracking-md w-full py-4 px-8 transition-colors justify-center items-center uppercase hover:bg-base-24"
  >
    <slot />
  </nuxt-link>

  <a
    v-else
    target="_blank"
    v-bind:href="link"
    class="rounded-md flex bg-base-16 tracking-md w-full py-4 px-8 transition-colors justify-center items-center uppercase hover:bg-base-24"
  >
    <slot />
  </a>
</template>

<script>
  export default {
    props: ['scope', 'link']
  }
</script>
