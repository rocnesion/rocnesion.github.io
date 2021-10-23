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
      document.onmousemove = e => {
        this.$refs.cursor.style.top = e.clientY - 4 + 'px'
        this.$refs.cursor.style.left = e.clientX - 4 + 'px'
      }

      document.onmouseleave = e => {
        this.$refs.cursor.style.display = 'none'
      }

      document.onmouseenter = e => {
        if (!e.sourceCapabilities.firesTouchEvents) this.$refs.cursor.style.display = 'flex'
      }
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
