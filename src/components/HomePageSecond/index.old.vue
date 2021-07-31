<template>
  <div v-if="changeOrder" :class="['home-page-second', className]">
    <svg class="home-page-second__svg" viewbox="0 0 1835.353 1588.813" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        class="home-page-second__svg-path"
        d="M1742.332,884.248
 c115.251-297.477-227.275-629.333-472.164-735.576C1019.375,39.867,628.568-30.694,371.548,255.475
 C70.687,590.458-8.808,1271.023,208.759,1447.666c274.181,222.606,533.382-190.457,794.034-267.309
 C1263.445,1103.504,1619.875,1200.318,1742.332,884.248z"
      />

      <image
        width="6000"
        height="4900"
        :href="image"
        transform="matrix(0.3402 0 0 0.3402 -100 -50)"
      ></image>
    </svg>

    <div class="cyrcle">
      <h3 class="cyrcle__title">{{ title }}</h3>
    </div>
  </div>

  <div v-else :class="['home-page-second-reverse', className]">
    <svg viewbox="0 0 1835.353 1588.813" xmlns="http://www.w3.org/2000/svg" class="home-page-second-reverse__svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        class="home-page-second-reverse__svg-path"
        d="M1742.332,884.248
 c115.251-297.477-227.275-629.333-472.164-735.576C1019.375,39.867,628.568-30.694,371.548,255.475
 C70.687,590.458-8.808,1271.023,208.759,1447.666c274.181,222.606,533.382-190.457,794.034-267.309
 C1263.445,1103.504,1619.875,1200.318,1742.332,884.248z"
      />
      
      <image
        width="5860"
        height="4740"
        :href="image"
        class="home-page-second-reverse__svg-image"
        transform="matrix(0.3402 0 0 0.3402 -100 50)"
      ></image>
    </svg>

    <div class="cyrcle-reverse">
      <h3 class="cyrcle-reverse__title">{{ title }}</h3>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HomePageSecond',

  props: {
    title: String,
    image: String,
    className: String,
    changeOrder: Boolean
  },

  mounted() {
    gsap.from(`.${this.className} .home-page-second__svg`, {
      scrollTrigger: {
        start: 'top center',
        trigger: `.${this.className}`,
        toggleActions: 'play none reverse none'
      },
      scale: 0.1,
      opacity: 0,
      rotate: -30,
      duration: 1.5
    });

    gsap.from(`.${this.className} .cyrcle`, {
      scrollTrigger: {
        start: 'top center',
        trigger: `.${this.className}`,
        toggleActions: 'play none reverse none'
      },
      scale: 0,
      opacity: 0,
      duration: 1
    });

    gsap.from(`.${this.className} .cyrcle__title`, {
      delay: 0.2,
      opacity: 0,
      duration: 0.5
    });

    // Reverse
    gsap.from(`.${this.className} .home-page-second-reverse__svg`, {
      scrollTrigger: {
        start: 'top bottom',
        trigger: `.${this.className} .home-page-second-reverse__svg`,
        toggleActions: 'play none reverse none'
      },
      scale: 0.1,
      opacity: 0,
      rotate: 100,
      duration: 1
    });

    gsap.from(`.${this.className} .cyrcle-reverse`, {
      scrollTrigger: {
        trigger: `.${this.className} .home-page-second-reverse__svg`,
        toggleActions: 'play none reverse none'
      },
      scale: 0,
      opacity: 0,
      duration: 1
    });

    gsap.from(`.${this.className} .cyrcle-reverse__title`, {
      scrollTrigger: `.${this.className} .home-page-second-reverse__svg`,
      delay: 0.2,
      opacity: 0,
      duration: 0.5
    });
  }
};
</script>

<style src="./home-page-second.scss" lang="scss" scoped />
