<script lang="ts">
  import { onMount } from 'svelte'
  import { istouch } from '~/tool/istouch'
  import { timeout } from '~/tool/timeout'

  let cursor: HTMLSpanElement
  let motion: HTMLSpanElement

  onMount(() => {
    document.onmouseout = event => {
      if (istouch(event)) return

      cursor.classList.add('hide')
    }

    document.onmouseover = event => {
      if (istouch(event)) return

      cursor.classList.remove('hide')
    }

    document.onmousemove = event => {
      if (istouch(event)) return

      cursor.style.top = event.clientY - 4 + 'px'
      cursor.style.left = event.clientX - 4 + 'px'
    }

    document.onclick = event => {
      if (istouch(event)) return

      motion.classList.add('hide')
      timeout(() => motion.classList.remove('hide'), 600)

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
    z-index: 999;
    display: flex;
    position: fixed;
    align-items: center;
    pointer-events: none;
    justify-content: center;

    width: 8px;
    height: 8px;
    border-radius: 2px;

    background-color: hsl(216 8% 64%);

    &.hide {
      visibility: hidden;
    }
  }

  .ripple {
    position: absolute;

    width: 16px;
    height: 16px;
    border-radius: 4px;

    &.motion {
      animation: motion 1.4s infinite;
      border: 2px solid hsl(216 8% 64%);
    }

    &.action {
      animation: action 0.4s linear;
      border: 1px solid hsl(216 8% 64%);
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
