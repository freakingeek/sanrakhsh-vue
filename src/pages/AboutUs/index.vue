<template>
  <DefaultLayout>
    <div class="about-us-page">
      <svg class="svg-layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 174.017">
        <path
          class="svg-layer__path"
          d="M2071.035,166.824c291.186,231.863,3.589,647.038-264.284,824.885
 c-274.333,182.135-748.858,376.056-1218.97,201.561C37.478,989.012-389.261,397.365-190.357,164.664
 c250.658-293.256,783.904-4.246,1159.274-21.051C1344.288,126.81,1761.647-79.532,2071.035,166.824z"
        ></path>
      </svg>

      <div class="content-box">
        <div class="content-box__cyrcle">
          <h1 class="content-box__title">{{ title }}</h1>
        </div>

        <div class="content-box__content">
          <p class="content-box__summary">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
// Layout
import DefaultLayout from '@/layouts/Default.vue';

export default {
  name: 'AboutUsPage',

  components: {
    DefaultLayout
  },

  computed: {
    title() {
      switch (this.$store.state.language) {
        case 'en':
          return 'About Sanrakhsh';
        case 'ar':
          return 'حول سان رخش';
        default:
          return 'درباره سان‌رخش';
      }
    },

    text() {
      switch (this.$store.state.language) {
        case 'en':
          return 'San rakhsh was created in 2019 to meet all the needs of consumers in the field of washing clothes with families. The goal of this brand is to produce a variety of quality products to comprehensively respond to the concerns and needs of consumers';
        case 'ar':
          return 'تم إنشاء سان رخش فً عام 91۸۳ لتلبٌة جمٌع احتٌاجات المستهلكٌن فً مجال غسٌل المالبس مع العائالت ، والهدف من هذه العالمة التجارٌة هو إنتاج مجموعة متنوعة من المنتجات عالٌة الجودة لالستجابة الشاملة الهتمامات واحتٌاجات المستهلكٌن.';
        default:
          return 'سان‌رخش در سال ۱۳۹۸ خلق شده است تا با پاسخگویی به تمام نیاز های مصرف کنندگان در زمینه شستشوی البسه در کنار خانواده ها باشد،هدف این برند تولید محصولات متنوع و با کیفیت جهت پاسخگویی همه جانبه به دغدغه ها و نیاز های مصرف کنندگان است.';
      }
    }
  },

  mounted() {
    this.$store.commit('CHANGE_PAGE_TITLE', [
      {
        lang: 'fa',
        title: 'درباره‌ما',
        subTitle: 'درباره شرکت سان‌رخش'
      },

      {
        lang: 'ar',
        title: 'حول سان رخش',
        subTitle: 'ارتباط با گروه پشتیبانی شرکت سان‌رخش'
      },

      {
        lang: 'en',
        title: 'About Sanrakhsh',
        subTitle: 'ارتباط با گروه پشتیبانی شرکت سان‌رخش'
      }
    ]);
  }
};
</script>

<style src="./aboutUs.scss" lang="scss" scoped />
