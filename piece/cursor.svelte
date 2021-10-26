<script lang="ts">
  import { onMount } from 'svelte'
  import { tool } from '~/tool/base'

  let cursor: HTMLSpanElement
  let motion: HTMLSpanElement

  onMount(() => {
    document.onmouseout = event => {
      if (tool.istouch(event)) return

      cursor.classList.add('hide')
    }

    document.onmouseover = event => {
      if (tool.istouch(event)) return

      cursor.classList.remove('hide')
    }

    document.onmousemove = event => {
      if (tool.istouch(event)) return

      cursor.style.top = event.clientY - 4 + 'px'
      cursor.style.left = event.clientX - 4 + 'px'
    }

    document.onclick = event => {
      if (tool.istouch(event)) return

      motion.classList.add('hide')
      tool.timeout(() => motion.classList.remove('hide'), 600)

      const action = document.createElement('span')
      action.onanimationend = () => action.remove()
      action.classList.add('ripple', 'action')
      cursor.append(action)
    }
  })
</script>

<span class="cursor hide" bind:this={cursor}>
  <span class="ripple motion" bind:this={motion} />
</span>

<style lang="scss" global>
  .cursor {
    display: flex;
    position: fixed;
    width: pre.rem(8);
    height: pre.rem(8);
    align-items: center;
    pointer-events: none;
    justify-content: center;
    border-radius: pre.rem(2);
    background-color: pre.con(base-64);

    &.hide {
      visibility: hidden;
    }
  }

  .ripple {
    position: absolute;
    width: pre.rem(16);
    height: pre.rem(16);
    border-radius: pre.con(edge-rad);

    &.motion {
      animation: motion 1.4s infinite;
      border: pre.rem(2) solid pre.con(base-64);
    }

    &.action {
      animation: action 0.4s linear;
      border: pre.rem(1) solid pre.con(base-64);
    }

    &.hide {
      animation: none;
      visibility: hidden;
    }
  }

  .cursor.hide > .ripple.motion {
    animation: none;
  }

  @keyframes motion {
    0% {
      opacity: 0.8;
      transform: scale(0);
    }

    100% {
      opacity: 0;
      transform: scale(2);
    }
  }

  @keyframes action {
    0% {
      opacity: 0.6;
      transform: scale(0);
    }

    100% {
      opacity: 0;
      transform: scale(4);
    }
  }
</style>
