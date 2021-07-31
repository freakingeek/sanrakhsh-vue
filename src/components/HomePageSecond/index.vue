<template>
  <div :class="[reverce ? 'home-page-second_reverce' : 'home-page-second', className]">
    <div class="svg-box">
      <svg class="svg-box__svg" viewbox="0 0 1500 1000">
        <path
          class="svg-box__svg-path"
          d="M1742.332,884.248
 c115.251-297.477-227.275-629.333-472.164-735.576C1019.375,39.867,628.568-30.694,371.548,255.475
 C70.687,590.458-8.808,1271.023,208.759,1447.666c274.181,222.606,533.382-190.457,794.034-267.309
 C1263.445,1103.504,1619.875,1200.318,1742.332,884.248z"
        />

        <image class="svg-box__svg-image" :href="image" transform="matrix(0.3402 0 0 0.3402 -100 -50)" />
      </svg>
    </div>

    <div class="cyrcle">
      <h3 class="cyrcle__title">{{ title }}</h3>
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
    reverce: Boolean,
    className: String
  },

  mounted() {
    gsap.from(`.${this.className} .svg-box__svg`, {
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
  }
};
</script>

<style src="./home-page-second.scss" lang="scss" scoped />
