<template>
  <DefaultLayout>
    <Component v-for="(component, index) in uiComponents" v-bind="component.props" :is="component.ui" :key="index" />
  </DefaultLayout>
</template>

<script>
import HomePageFirst from '@/components/HomePageFirst';
import HomePageSecond from '@/components/HomePageSecond';

// Layout
import DefaultLayout from '@/layouts/Default.vue';

export default {
  name: 'HomePage',

  components: {
    DefaultLayout,

    HomePageFirst,
    HomePageSecond,
  },

  computed: {
    language() {
      return this.$store.state.language;
    },

    uiComponents() {
      return [
        {
          ui: 'HomePageFirst',
          props: {
            color: '#e66883',
            className: 'first-one',
            title: this.setTextBaseOnUserLanguage(this.language, [
              'تمیزی و درخشندگی لباس',
              'نظافة وإشراق الملابس',
              'Cleanliness and radiance of clothes'
            ]),

            background: require('@/assets/images/1.jpg'),
            subTitle: this.setTextBaseOnUserLanguage(this.language, [
              'بهترین رایحه‌ها با سان‌رخش در انتظار شماست',
              'أفضل الروائح في انتظارك',
              'The best scents with Sanrakhsh'
            ])
          }
        },
        {
          ui: 'HomePageSecond',
          props: {
            className: 'second-one',
            image: require('@/assets/images/r01.png'),
            title: this.setTextBaseOnUserLanguage(this.language, [
              'پاک کننده ای قدرتمند و موثر',
              'منظف قوي و فعال',
              'Powerful and effective cleaner'
            ])
          }
        },
        {
          ui: 'HomePageSecond',
          props: {
            reverce: true,
            className: 'second-reverse-one',
            // image: require('@/assets/images/r01.png'),
            title: this.setTextBaseOnUserLanguage(this.language, ['نرم کننده پارچه', 'منعم الأقمشة', 'Fabric softener'])
          }
        },
        {
          ui: 'HomePageFirst',
          props: {
            color: '#a8b538',
            className: 'first-two',
            background: require('@/assets/images/2.jpg'),

            title: this.setTextBaseOnUserLanguage(this.language, [
              'بهترین رایحه با سان رخش',
              'أفضل رائحة مع سان رخش',
              'The best scent with Sanrakhsh'
            ]),

            subTitle: this.setTextBaseOnUserLanguage(this.language, [
              'زیبایی، ظرافت و نرمی لباس‌های شما با محصولات سان‌رخش',
              'جمال وأناقة الملابس مع سان‌رخش',
              'The beauty and elegance of clothes with Sanrakhsh'
            ])
          }
        },
        {
          ui: 'HomePageSecond',
          props: {
            className: 'second-two',
            image: require('@/assets/images/r02.png'),
            title: this.setTextBaseOnUserLanguage(this.language, [
              'غلظت مناسب و حاللیت عالی',
              'تركيز مناسب وقابلية ذوبان ممتازة',
              'Suitable‬‬ concentration‬‬'
            ])
          }
        },
        {
          ui: 'HomePageSecond',
          props: {
            reverce: true,
            className: 'second-reverse-two',
            // image: require('@/assets/images/r01.png'),
            title: this.setTextBaseOnUserLanguage(this.language, [
              'ثبات رنگ و جلوگیری از تداخل رنگ در لباس',
              'ثبات اللون لمنع تداخل الالوان في الملابس',
              'Prevent color interference in clothing'
            ])
          }
        },
        {
          ui: 'HomePageFirst',
          props: {
            color: '#00b1a8',
            className: 'first-three',
            title: this.setTextBaseOnUserLanguage(this.language, [
              'نرمی و لطافت لباس‌های شما',
              'نعومة الملابس',
              'The softness of the clothes'
            ]),

            background: require('@/assets/images/3.jpg'),
            subTitle: this.setTextBaseOnUserLanguage(this.language, [
              'ایجاد لطافت و نرمی در الیاف پارچه با مایع لباسشویی سان‌رخش',
              'یخلق نعومة ونعومة في ألیاف النسیج',
              'Creates softness and softness in fabric fibers'
            ])
          }
        },
        {
          ui: 'HomePageSecond',
          props: {
            className: 'second-three',
            image: require('@/assets/images/r03.png'),
            title: this.setTextBaseOnUserLanguage(this.language, [
              'رایحه خوش دلپذیر و ماندگاری بالا',
              'رائحة طيبة ومتانة عالية',
              'Pleasant aroma and high durability'
            ])
          }
        },
        {
          ui: 'HomePageSecond',
          props: {
            reverce: true,
            className: 'second-reverse-three',
            // image: require('@/assets/images/03.png'),
            title: this.setTextBaseOnUserLanguage(this.language, [
              'غلظت مناسب جهت نرم کنندگی',
              'تركیز مناسب للتلیین',
              'Suitable concentration for softening'
            ])
          }
        }
      ];
    }
  },

  methods: {
    setTextBaseOnUserLanguage(language, TextsArray = []) {
      return language === 'fa' ? TextsArray[0] : this.language === 'ar' ? TextsArray[1] : TextsArray[2];
    }
  }
};
</script>
