<script lang="ts">
  export let link: string
  export let external: boolean = false
</script>

<a class="button" href={link} target={external ? '_blank' : undefined}>
  <slot />
</a>

<style lang="scss" global>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    border-radius: 4px;
    padding: 16px 32px;

    background-color: hsl(216 8% 16%);
    transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .button:hover {
    background-color: hsl(216 8% 24%);
  }
</style>
