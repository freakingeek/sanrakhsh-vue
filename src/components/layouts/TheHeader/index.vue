<template>
  <header :class="['header', { enHeader: language === 'en' }]">
    <div class="header__menu-box">
      <div class="logo-box">
        <RouterLink to="/">
          <img alt="سان‌رخش" :src="headerLogo" class="logo-box__image" />
        </RouterLink>
      </div>

      <nav class="navigation-menu">
        <ul class="navigation-menu__list">
          <li
            :key="index"
            v-for="(link, index) in headerLinks"
            class="navigation-menu__list-items"
          >
            <RouterLink :to="link.to" class="navigation-menu__list-items-link">
              {{ link.name }}
            </RouterLink>

            <ul
              v-if="link.subLinks && link.subLinks.length"
              class="navigation-menu__sub-list"
            >
              <li
                :key="index"
                class="navigation-menu__sub-list-items"
                v-for="(link, index) in link.subLinks"
              >
                <div class="navigation-menu__sub-list-image-box">
                  <img
                    :src="link.image"
                    :alt="link.name"
                    class="navigation-menu__sub-list-image"
                  />
                </div>

                <RouterLink :to="link.to" class="navigation-menu__sub-list-links">
                  {{ link.name }}
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Mobile menu -->
    <MenuIcon
      size="1.5x"
      class="mobile-menu-button"
      @click="showMobileMenu = true"
    />

    <div v-if="showMobileMenu" class="mobile-menu">
      <XIcon
        size="1.5x"
        class="mobile-menu__close-btn"
        @click="showMobileMenu = false"
      />

      <nav class="mobile-menu__menu">
        <ul class="mobile-menu__menu-list">
          <li
            :key="index"
            v-for="(link, index) in headerLinks"
            class="mobile-menu__menu-list-items"
          >
            <RouterLink :to="link.to" class="mobile-menu__menu-items-link">
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="mobile-menu__select-box">
        <select
          name="langs"
          v-model="language"
          @change="changeLanguage"
          class="mobile-menu__select"
        >
          <option value="fa">Persian</option>
          <option value="ar">Arabic</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>

    <!-- Select language box -->
    <div class="select-lang-box">
      <select
        name="langs"
        v-model="language"
        @change="changeLanguage"
        class="select-lang-box__select"
      >
        <option value="fa">Persian</option>
        <option value="ar">Arabic</option>
        <option value="en">English</option>
      </select>

      <ChevronDownIcon size="1x" class="select-lang-box__icon" />
    </div>
  </header>
</template>

<script>
import { ChevronDownIcon, MenuIcon, XIcon } from 'vue-feather-icons'

export default {
  name: 'TheHeader',

  components: {
    XIcon,
    MenuIcon,
    ChevronDownIcon,
  },

  data() {
    return {
      showMobileMenu: false,
      language: this.$store.state.language,
    }
  },

  computed: {
    headerLogo() {
      return this.language === 'en'
        ? require('@/assets/images/logo-en.png')
        : require('@/assets/images/logo.png')
    },

    headerLinks() {
      if (this.language === 'fa') {
        return [
          {
            name: 'صفحه‌اصلی',
            to: '/',
          },
          {
            name: 'محصولات‌ما',
            to: '/products',
            subLinks: [
              {
                name: 'نرم کننده',
                image: require('@/assets/images/products/01.jpeg'),
                to: '/products/softner',
              },
              {
                name: 'پودر لباسشویی',
                image: require('@/assets/images/products/02.jpeg'),
                to: '/products/washing-powder',
              },
              {
                name: 'مایع لباسشویی',
                image: require('@/assets/images/products/01.jpeg'),
                to: '/products/washing-liquid',
              },
            ],
          },
          {
            name: 'درباره سان‌رخش',
            to: '/about-us',
          },
          {
            name: 'ارتباط با ما',
            to: '/contact-us',
          },
          // {
          //   name: 'نمایندگی‌های فروش',
          //   to: '/branches',
          // },
        ]
      } else if (this.language === 'en') {
        return [
          {
            name: 'Home',
            to: '/',
          },
          {
            name: 'Products',
            to: '/products',
            subLinks: [
              {
                name: 'Softener fabric',
                image: require('@/assets/images/products/01.jpeg'),
                to: '/products/softner',
              },
              {
                name: 'Washing powder',
                image: require('@/assets/images/products/02.jpeg'),
                to: '/products/washing-powder',
              },
              {
                name: 'Washing liquid',
                image: require('@/assets/images/products/01.jpeg'),
                to: '/products/washing-liquid',
              },
            ],
          },
          {
            name: 'About Sanrakhsh',
            to: '/about-us',
          },
          {
            name: 'Contact us',
            to: '/contact-us',
          },
          {
            name: 'Branches',
            to: '/branches',
          },
        ]
      } else {
        return [
          {
            name: 'الرئيسة',
            to: '/',
          },
          {
            name: 'منتجات',
            to: '/products',
            subLinks: [
              {
                name: 'منعم األقمشة',
                image: require('@/assets/images/products/01.jpeg'),
                to: '/products/softner',
              },
              {
                name: 'مسحوق غسٌل',
                image: require('@/assets/images/products/02.jpeg'),
                to: '/products/washing-powder',
              },
              {
                name: 'سائل غسيل',
                image: require('@/assets/images/products/01.jpeg'),
                to: '/products/washing-liquid',
              },
            ],
          },
          {
            name: 'حول سان‌رخش',
            to: '/about-us',
          },
          {
            name: 'اتصل بنا',
            to: '/contact-us',
          },
        ]
      }
    },
  },

  methods: {
    changeLanguage() {
      this.$store.commit('CHANGE_DEFAULT_LANGUAGE', this.language)
    },
  },
}
</script>

<style src="./the-header.scss" lang="scss" scoped />
