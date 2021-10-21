<template>
  <PagesLayout>
    <ProductsRow v-bind="firstSectionProps" />

    <ProductsRow v-bind="secondSectionProps" reverce />
  </PagesLayout>
</template>

<script>
import ProductsRow from '@/components/ProductsRow'

// Layout
import PagesLayout from '@/layouts/Pages.vue';

export default {
  name: 'WashingPowder',

  components: {
    ProductsRow,

    PagesLayout,
  },

  computed: {
    firstSectionTitle() {
      switch (this.$store.state.language) {
        case 'en':
          return 'Detergent powders'
        case 'ar':
          return 'مسحوق غسٌل آلً'
        default:
          return 'پودر شستشو ماشینی'
      }
    },

    firstSectionText() {
      switch (this.$store.state.language) {
        case 'en':
          return 'Detergent Powder san rakhsh is suitable for doing the laundry with a washing machine. It contains ingredients that completely wash the dirt off clothes and clean them. Detergent Powdersan rakhsh is an ideal option for removing stains from clothes'
        case 'ar':
          return 'ٌحتوي هذا المسحوق على مركبات تنظف المالبس وتنظفها تما ًما .مسحوق Sanrakhsh هو الخٌار المثالً لتلطٌخ المالبس.'
        default:
          return 'این پودر حاوی ترکیباتی است که لباس ها را کاملا پاک و تمیز میکند برای لکه زدایی لباس ها پودر سان رخش انتخابی ایده آل است.'
      }
    },

    firstSectionProps() {
      return {
        title: this.firstSectionTitle,
        description: this.firstSectionText,
        products: [
          {
            name: 'پودر لباس‌شویی ماشینی',
            // description: 'بهترین نرم کننده جهان',
            image: require('@/assets/images/products/p02.jpg'),
          },
          {
            name: 'پودر لباس‌شویی ماشینی بزرگ',
            // description: 'بهترین نرم کننده جهان',
            image: require('@/assets/images/products/p01.jpg'),
          },
        ],
      }
    },

    secondSectionTitle() {
      switch (this.$store.state.language) {
        case 'en':
          return 'Hand washing powder'
        case 'ar':
          return 'مسحوق غسٌل يدوي'
        default:
          return 'پودر شستشو دستی'
      }
    },

    secondSectionText() {
      switch (this.$store.state.language) {
        case 'en':
          return 'san rakhsh’s Hand Washing Detergent Powder is an excellent option for washing clothes by hand and with semiautomatic washing machines'
        case 'ar':
          return 'مسحوق سان رخش لغسل بالٌد خٌار ممتاز لغسل بالٌد وكذلك لالستخدام فً الغساالت شبه األوتوماتٌكٌة'
        default:
          return 'پودر سان رخش مخصوص شستشوی با دست گزینه ای بسیار عالی برای شستشوی دست و همچنین استفاده در ماشین لباسشویی نیمه اتوماتیک است'
      }
    },

    secondSectionProps() {
      return {
        title: this.secondSectionTitle,
        description: this.secondSectionText,
        products: [
          {
            name: 'پودر شستشو دستی',
            // description: 'بهترین نرم کننده جهان',
            image: require('@/assets/images/products/p03.jpg'),
          },
          {
            name: 'پودر شستشو دستی بزرگ',
            // description: 'بهترین نرم کننده جهان',
            image: require('@/assets/images/products/p04.jpg'),
          },
        ],
      }
    },
  },

  mounted() {
    this.$store.commit('CHANGE_PAGE_TITLE', [
      {
        lang: 'fa',
        title: 'پودر لباسشویی',
        subTitle: 'لیست تمام پودرهای لباسشویی سان‌رخش',
      },

      {
        lang: 'ar',
        title: 'پودر لباسشویی',
        subTitle: 'لیست تمام پودرهای لباسشویی سان‌رخش',
      },

      {
        lang: 'en',
        title: 'Washing Powder',
        subTitle: 'List of all the sanrakhsh washing powder',
      },
    ])
  },
}
</script>
