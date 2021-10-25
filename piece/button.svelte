<script lang="ts">
  export let link: string
  export let external: boolean = false
</script>

<a class="button" href={link} target={external ? '_blank' : undefined}>
  <slot />
</a>

<style lang="scss" global>
  .button {
    border-radius: pre.con(edge-rad);

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: pre.con(base-16);

    width: 100%;
    padding: pre.rem(16) pre.rem(32);

    transition: background-color pre.con(time) pre.con(func);
  }

  .button:hover {
    background-color: pre.con(base-24);
  }
</style>
