<template>
  <main class="pages-layout">
    <TheHeader />

    <PagesHeader
      v-if="pageInfo.title"
      :title="pageInfo.title"
      :subTitle="pageInfo.subTitle"
    />

    <slot />
  </main>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'
import PagesHeader from '@/components/layouts/PagesHeader'
import { mapGetters } from 'vuex'

export default {
  name: 'PagesLayout',

  components: {
    TheHeader,
    PagesHeader,
  },

  computed: {
    ...mapGetters(['pageInfoBaseOnSiteLanguage']),

    pageInfo() {
      return this.pageInfoBaseOnSiteLanguage.length
        ? this.pageInfoBaseOnSiteLanguage[0]
        : {}
    },
  },

  head() {
    return {
      title: this.pageInfo?.title ? this.pageInfo.title : 'سان‌رخش',
    }
  },
}
</script>

<style>
.page-transition-enter-active {
  transition: all 0.3s ease;
}
.page-transition-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-transition-enter, .page-transition-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-2rem);
  opacity: 0;
}
</style>
