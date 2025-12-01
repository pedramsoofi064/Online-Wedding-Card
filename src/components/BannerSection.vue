<template>
  <div class="banner" data-aos="fade-up">
    <div class="banner__img">
      <img :src="bannerImage" alt="">
    </div>
    <div class="banner__bg"> </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { eventConfig } from 'src/content/eventConfig';

const bannerImage = computed(() =>
  new URL(`../assets/img/${eventConfig.hero.bannerImage}`, import.meta.url).href
);
</script>

<style lang="scss" scoped>
$width: 300px;
$height: 375px;

.banner {
  margin-bottom: 50px;
  margin-top: 20px;
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  // overflow: hidden

  &__img {
    width: $width;
    height: $height;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 2;

    >img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__bg {
    width: $width;
    height: $height;
    background-color: #c6b49c;
    position: absolute;
    top: 20px;
    z-index: 1;
    transform: rotate(8deg);
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}
</style>
