<template>
  <span
    ref="cursor"
    style="display: none;"
    class="rounded-sm bg-base-64 h-2 w-2 c-cursor  fixed items-center justify-center pointer-events-none"
  >
    <span class="bg-transparent rounded-md border-2 border-base-64 flex-shrink-0 h-4 w-4" />
  </span>
</template>

<script>
  export default {
    mounted() {
      const cursor = this.$refs.cursor

      document.onmousemove = e => {
        cursor.style.top = e.clientY - 4 + 'px'
        cursor.style.left = e.clientX - 4 + 'px'

        if (cursor.style.display == 'flex' || e.sourceCapabilities.firesTouchEvents) return

        cursor.style.display = 'flex'
      }

      document.onmouseleave = () => (cursor.style.display = 'none')
    }
  }
</script>

<style>
  .c-cursor > span {
    animation: cursor 1.4s infinite;
  }

  @keyframes cursor {
    0% {
      opacity: 1;
      transform: scale(0);
    }

    100% {
      opacity: 0;
      transform: scale(2);
    }
  }
</style>
