<template>
  <div
    :class="['home-page-first', className]"
    :style="background && `background: url(${background}) no-repeat bottom;background-size: contain;`"
  >
    <div class="home-page-first__content">
      <!-- Layer 1 -->
      <svg viewBox="0 0 368.73 284.65" xmlns="http://www.w3.org/2000/svg" :class="['svg-layer', `${className}__svg`]">
        <path
          :fill="color"
          class="svg-layer__path"
          d="M139.71,20.42c33.67,20.77,55.46,34,120.77,28.43C329.29,43,373,57.55,368.4,109.19S311.73,221.37,247,261.2c-60.94,37.49-112.51,22.55-139.94,6.49-28.85-16.88-69.88-44.93-98.5-119.5-6-15.7-24-94,21.93-133.58C56.09-6.33,90.86-.33,110.4,5.61,119.51,8.38,130.77,14.9,139.71,20.42Z"
        />
      </svg>

      <!-- Layer 2 -->
      <svg viewBox="0 0 368.73 284.65" xmlns="http://www.w3.org/2000/svg" :class="['svg-layer2', `${className}__svg2`]">
        <path
          :fill="color"
          class="svg-layer2__path"
          d="M139.71,20.42c33.67,20.77,55.46,34,120.77,28.43C329.29,43,373,57.55,368.4,109.19S311.73,221.37,247,261.2c-60.94,37.49-112.51,22.55-139.94,6.49-28.85-16.88-69.88-44.93-98.5-119.5-6-15.7-24-94,21.93-133.58C56.09-6.33,90.86-.33,110.4,5.61,119.51,8.38,130.77,14.9,139.71,20.42Z"
        />
      </svg>

      <!-- Contents -->
      <h2 :class="['home-page-first__title', `${className}__title`]">
        {{ title }}
      </h2>
      <span :class="['home-page-first__summary', `${className}__summary`]">
        {{ subTitle }}
      </span>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HomePageFirst',

  props: {
    title: String,
    color: String,
    subTitle: String,
    className: String,
    background: String
  },

  mounted() {
    if (process.browser) {
      gsap.to(`.${this.className}`, {
        scrollTrigger: {
          trigger: `.${this.className}`,
          start: 'center center',
          scrub: 2
        },
        scale: 0,
        opacity: 0,
        duration: 3
      });

      gsap.from(`.${this.className}__svg`, {
        scrollTrigger: {
          trigger: `.${this.className}__svg`
        },
        y: 30,
        scale: 0.5,
        delay: 0.5,
        opacity: 0,
        rotate: 60,
        duration: 0.8
      });

      gsap.from(`.${this.className}__svg2`, {
        scrollTrigger: {
          trigger: `.${this.className}__svg`
        },
        y: 30,
        scale: 0.5,
        delay: 0.5,
        opacity: 0,
        rotate: -80,
        duration: 0.8
      });

      const tl = gsap.timeline({
        repeatDelay: 0.2,
        scrollTrigger: `.${this.className}__svg`
      });

      tl.from(`.${this.className}__title`, {
        delay: 0.5,
        opacity: 0,
        duration: 0.8
      });

      tl.from(`.${this.className}__summary`, {
        opacity: 0,
        duration: 0.8
      });
    }
  }
};
</script>

<style src="./home-page-first.scss" lang="scss" scoped />
