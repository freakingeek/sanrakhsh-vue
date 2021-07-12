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
              'تمیزی و درخشندگی لباس',
              'نظافة وإشراق الملابس',
              'Cleanliness and radiance of clothes'
            ])
          }
        },
        {
          ui: 'HomePageSecond',
          props: {
            changeOrder: true,
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
              'بهترین رایحه با سان رخش',
              'أفضل رائحة مع سان رخش',
              'The best scent with Sanrakhsh'
            ])
          }
        },
        {
          ui: 'HomePageSecond',
          props: {
            changeOrder: true,
            className: 'second-two',
            image: require('@/assets/images/r02.png'),
            title: this.setTextBaseOnUserLanguage(this.language, [
              'غلظت مناسب و حاللیت عالی',
              'تركيز مناسب وقابلية ذوبان ممتازة',
              'Suitable‬‬ concentration‬‬ and excellent solubility'
            ])
          }
        },
        {
          ui: 'HomePageSecond',
          props: {
            className: 'second-reverse-two',
            // image: require('@/assets/images/r01.png'),
            title: this.setTextBaseOnUserLanguage(this.language, [
              'ثبات رنگ و جلوگیری از تداخل رنگ در لباس',
              'ثبات اللون لمنع تداخل الالوان في الملابس',
              'Color fastness and prevent color interference in clothing'
            ])
          }
        },
        {
          ui: 'HomePageFirst',
          props: {
            color: '#00b1a8',
            className: 'first-three',
            title: this.setTextBaseOnUserLanguage(this.language, [
              'ایجاد لطافت و نرمی در الیاف پارچه',
              'یخلق نعومة ونعومة في ألیاف النسیج',
              'Creates softness and softness in fabric fibers'
            ]),

            background: require('@/assets/images/3.jpg'),
            subTitle: this.setTextBaseOnUserLanguage(this.language, [
              'ایجاد لطافت و نرمی در الیاف پارچه',
              'یخلق نعومة ونعومة في ألیاف النسیج',
              'Creates softness and softness in fabric fibers'
            ])
          }
        },
        {
          ui: 'HomePageSecond',
          props: {
            changeOrder: true,
            className: 'second-three',
            image: require('@/assets/images/r01.png'),
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
            className: 'second-reverse-three',
            // image: require('@/assets/images/r01.png'),
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
