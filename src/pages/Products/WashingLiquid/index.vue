<template>
  <PagesLayout>
    <ProductsRow v-bind="thirdSectionProps" />
  </PagesLayout>
</template>

<script>
import ProductsRow from '@/components/ProductsRow';

// Layout
import PagesLayout from '@/layouts/Pages.vue';

export default {
  name: 'WashingLiquid',

  components: {
    ProductsRow,

    PagesLayout
  },

  computed: {
    title() {
      switch (this.$store.state.language) {
        case 'en':
          return 'Washing Liquid';
        case 'ar':
          return 'سائل غسيل';
        default:
          return 'مایع لباسشویی';
      }
    },

    text() {
      switch (this.$store.state.language) {
        case 'en':
          return 'The use of San Rakhsh washing liquid is very suitable for washing all kinds of clothes, especially colored clothes with a delicate fabric. Using liquid detergent helps to protect your washing machine and .prolong its life';
        case 'ar':
          return 'استخدام سائل غسیل سان رخش مناسب جًدا لغسیل جمیع أنواع المالبس وخاصة المالبس الملونة ذات األقمشة الرقیقة ، حیث یساعد استخدام المنظفات السائلة على حمایة الغسالة وإطالة عمرها';
        default:
          return 'استفاده از مایع لباسشویی سان رخش برای شستن انواع لباس ها،مخصوصا لباس های رنگی با پارچه ای ظریف بسیار مناسب است استفاده از شوینده مایع کمک میکند تا از ماشین لباس شویی خود نیز حفاظت کرده و عمر آن را طولانی‌تر کنید';
      }
    },

    thirdSectionProps() {
      return {
        title: this.title,
        description: this.text,
        products: [
          {
            name: 'نرم کننده اول',
            description: 'بهترین نرم کننده جهان',
            image: require('@/assets/images/products/01.jpeg')
          },
          {
            name: 'نرم کننده بزرگ',
            description: 'بهترین نرم کننده جهان',
            image: require('@/assets/images/products/02.jpeg')
          }
        ]
      };
    }
  },

  mounted() {
    this.$store.commit('CHANGE_PAGE_TITLE', [
      {
        lang: 'fa',
        title: 'مایع لباسشویی',
        subTitle: ''
      },

      {
        lang: 'ar',
        title: 'سائل غسيل',
        subTitle: ''
      },

      {
        lang: 'en',
        title: 'Washing Liquid',
        subTitle: ''
      }
    ]);
  }
};
</script>
