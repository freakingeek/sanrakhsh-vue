<template>
  <PagesLayout>
    <div class="contact-us">
      <p class="contact-us__summary">
        برای ارتباط با ما می توانید از طریق اطلاعات زیر در تماس باشید نظرات شما برای ما بسیار ارزشمند است اگر سوال،پیشنهاد و یا
        شکایتی دارید حتما با ما مطرح کنید
      </p>

      <form class="form" @submit.prevent="onFormSubmit">
        <div class="form__header">
          <input type="text" placeholder="اسم شما ..." />
          <input type="email" placeholder="ایمیل شما ..." />
        </div>

        <textarea class="form__textarea" cols="30" rows="10" placeholder="متن درخواست شما ..."></textarea>

        <div class="form__submit-box">
          <input type="submit" class="form__submit-btn" value="ارسال" />
        </div>
      </form>

      <section class="icons">
        <div class="icon">
          <MapIcon size="2x" class="icon__image" />
          <h4 class="icon__title">آدرس</h4>
          <span class="icon__summary">قم، خیابان هفت تیر، نبش کوچه 28</span>
        </div>

        <div class="icon">
          <InstagramIcon size="2x" class="icon__image" />
          <h4 class="icon__title">اینستاگرام</h4>
          <span class="icon__summary">@san-rakhsh</span>
        </div>

        <div class="icon">
          <PhoneIcon size="2x" class="icon__image" />
          <h4 class="icon__title">تلفن‌ها</h4>
          <span class="icon__summary">-</span>
        </div>

        <div class="icon">
          <UserIcon size="2x" class="icon__image" />
          <h4 class="icon__title">صدای مشتری</h4>
          <span class="icon__summary">09129529330</span>
        </div>
      </section>
    </div>
  </PagesLayout>
</template>

<script>
import { MapIcon, InstagramIcon, PhoneIcon, UserIcon } from 'vue-feather-icons';

// Layout
import PagesLayout from "@/layouts/Pages.vue"

export default {
  name: 'ContactUsPage',

  components: {
    MapIcon,
    UserIcon,
    PhoneIcon,
    InstagramIcon,

    PagesLayout
  },

  mounted() {
    this.$store.commit('CHANGE_PAGE_TITLE', [
      {
        lang: 'fa',
        title: 'ارتباط با ما',
        subTitle: 'ارتباط با گروه پشتیبانی شرکت سان‌رخش'
      },

      {
        lang: 'ar',
        title: 'ارتباط با ما 2',
        subTitle: 'ارتباط با گروه پشتیبانی شرکت سان‌رخش'
      },

      {
        lang: 'en',
        title: 'Contact us',
        subTitle: 'ارتباط با گروه پشتیبانی شرکت سان‌رخش'
      }
    ]);
  },

  methods: {
    onFormSubmit() {
      return;
    }
  }
};
</script>

<style src="./contactUs.scss" lang="scss" scoped />
