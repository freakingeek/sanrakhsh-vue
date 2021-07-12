<template>
  <PagesLayout>
    <ProductsRow v-bind="firstSectionProps" />
  </PagesLayout>
</template>

<script>
import ProductsRow from '@/components/ProductsRow';

// Layout
import PagesLayout from '@/layouts/Pages.vue';

export default {
  name: 'ProductsCategory',

  components: {
    ProductsRow,

    PagesLayout
  },

  computed: {
    title() {
      switch (this.$store.state.language) {
        case 'en':
          return 'Softner';
        case 'ar':
          return 'منعم األقمشة';
        default:
          return 'نرم‌کننده';
      }
    },

    text() {
      switch (this.$store.state.language) {
        case 'en':
          return 'As a consequence of frequent washing and contact with water and initial softness and smoothness. detergents, clothes gradually lose their sanrakhsh’s Fabric Softener for towels and clothes can be used to prevent this. The liquid contains ingredients that prevent detergents from stiffening fabrics and leaving them vulnerable';
        case 'ar':
          return 'نتٌجة للغسٌل المتكرر والتالمس مع الماء والمنظفات ، تفقد المالبس تدرٌجًٌا نعومتها األولٌة ونعومتها. ٌمكن استخدام منعم األقمشة من sanrakhsh للمناشف والمالبس لمنع ذلك. فً تكوٌن هذا السائل ، ٌتم استخدام المواد التً تمنع الجفاف والضعف الذي تضعه المنظفات على القماش.';
        default:
          return 'لباس ها باشستشو و تماس با آب و مواد شوینده به مرور نرمی و لطافت اولیه خودشان را از دست میدهند. در ترکیبات این مایع،از موادی استفاده شده که از خشکی و آسیب پذیری که مواد شوینده بر روی پارچه می گذارند جلوگیری می‌کند.';
      }
    },

    firstSectionProps() {
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
        title: 'نرم‌کننده‌ها',
        subTitle: ''
      },

      {
        lang: 'ar',
        title: 'منعم األقمشة',
        subTitle: ''
      },

      {
        lang: 'en',
        title: 'Softner',
        subTitle: ''
      }
    ]);
  }
};
</script>
