<template>
  <main class="default-layout">
    <TheHeader />
    <slot />
  </main>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'

export default {
  name: 'DefaultLayout',

  components: {
    TheHeader,
  },
}
</script>
