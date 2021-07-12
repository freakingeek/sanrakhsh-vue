<template>
  <PagesLayout>
    <div class="branches-page">
      <table>
        <tr>
          <th>شعب</th>
          <th>شماره تماس</th>
          <th>آدرس</th>
        </tr>
        <tr>
          <td>قم</td>
          <td>۰۹۱۲۹۵۲۹۳۳۰</td>
          <td class="addres">قم، خیابان ۷تیر بین کوی ۲۸ و ۳۰ ،پلاک ۳۸۸</td>
        </tr>
      </table>
    </div>
  </PagesLayout>
</template>

<script>
// Layout
import PagesLayout from '@/layouts/Pages.vue';

export default {
  name: 'BranchesPage',
  components: {
    PagesLayout
  },

  mounted() {
    this.$store.commit('CHANGE_PAGE_TITLE', [
      {
        lang: 'fa',
        title: 'نمایندگی‌های فروش',
        subTitle: 'تمام مراکز فروش و خدمات سان‌رخش در سراسر کشور'
      },

      {
        lang: 'ar',
        title: 'نمایندگی‌های فروش',
        subTitle: 'تمام مراکز فروش و خدمات سان‌رخش در سراسر کشور'
      },

      {
        lang: 'en',
        title: 'Branches',
        subTitle: 'تمام مراکز فروش و خدمات سان‌رخش در سراسر کشور'
      }
    ]);
  }
};
</script>

<style src="./branches.scss" lang="scss" scoped />
