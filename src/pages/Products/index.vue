<template>
  <DefaultLayout>
    <div id="first-section">
      <ProductsRow v-bind="firstSectionProps" />
    </div>

    <div id="second-section">
      <ProductsRow v-bind="secondSectionProps" reverce />
    </div>

    <div id="third-section">
      <ProductsRow v-bind="thirdSectionProps" />
    </div>
  </DefaultLayout>
</template>

<script>
import ProductsRow from '@/components/ProductsRow'

// Layout
import DefaultLayout from '@/layouts/Default.vue';

export default {
  name: 'ProductsPage',
  layout: 'pages',

  components: {
    ProductsRow,

    DefaultLayout,
  },

  transition: 'page-transition',

  computed: {
    firstSectionProps() {
      return {
        title: 'نرم کننده لباس',
        description: `لباس ها باشستشو و تماس با آب و مواد شوینده به مرور نرمی و لطافت اولیه خودشان را از دست میدهند. در ترکیبات این مایع،از موادی استفاده شده که از خشکی و آسیب پذیری که مواد شوینده بر روی پارچه می گذارند جلوگیری می‌کند.`,
        products: [
          {
            name: 'نرم کننده لباس',
            // description: '',
            image: require('@/assets/images/products/p05.jpg'),
          },
          {
            name: 'نرم کننده لباس',
            // description: '',
            image: require('@/assets/images/products/p05.jpg'),
          },
        ],
      }
    },

    secondSectionProps() {
      return {
        title: 'پودر لباسشویی',
        description: `این پودر لباسشویی سان رخش مخصوص ماشین لباسشویی است. این پودر حاوی ترکیباتی است که لباس ها را کاملا پاک و تمیز میکند برای لکه زدایی لباس ها پودر سان رخش انتخابی ایده آل است. پودر سان رخش مخصوص شستشوی با دست گزینه ای بسیار عالی برای شستشوی دست و همچنین استفاده در ماشین لباسشویی نیمه اتوماتیک است`,
        products: [
          {
            name: 'پودر لباس‌شویی',
            // description: 'بهترین نرم کننده جهان',
            image: require('@/assets/images/products/p02.jpg'),
          },
          {
            name: 'پودر لباس‌شویی بزرگ',
            // description: 'بهترین نرم کننده جهان',
            image: require('@/assets/images/products/p01.jpg'),
          },
        ],
      }
    },

    thirdSectionProps() {
      return {
        title: 'مایع لباسشویی',
        description: `استفاده از مایع لباسشویی سان رخش برای شستن انواع لباس ها،مخصوصا لباس های رنگی با پارچه ای ظریف بسیار مناسب است استفاده از شوینده مایع کمک میکند تا از ماشین لباس شویی خود نیز حفاظت کرده و عمر آن را طولانی تر کنید`,
        products: [
          {
            name: 'مایع لباس‌شویی',
            // description: 'بهترین نرم کننده جهان',
            image: require('@/assets/images/products/p05.jpg'),
          },
          {
            name: 'مایع لباس‌شویی',
            // description: 'بهترین نرم کننده جهان',
            image: require('@/assets/images/products/p05.jpg'),
          },
        ],
      }
    },
  },

  mounted() {
    this.$store.commit('CHANGE_PAGE_TITLE', [
      {
        lang: 'fa',
        title: 'محصولات‌ما',
        subTitle: 'لیست تمامی محصولات شرکت سان‌رخش',
      },

      {
        lang: 'ar',
        title: 'محصولات‌ما',
        subTitle: 'ارتباط با گروه پشتیبانی شرکت سان‌رخش',
      },

      {
        lang: 'en',
        title: 'Products',
        subTitle: 'List of all the Sanrakhsh products',
      },
    ])
  },
}
</script>

<style src="./products.scss" lang="scss" scoped />
