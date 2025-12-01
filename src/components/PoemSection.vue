<template>
  <div class="poem">
    <q-parallax :height="350" :speed="0.5">
      <template v-slot:media>
        <img class="peom__img" :src="imgSrc">
      </template>
      <div class="poem__overlay"></div>

      <div class="poem__text">
        <div>
          <p v-for="(item, index) in texts" :key="index" :class="item.class">
            {{ item.text }}
          </p>
        </div>
      </div>
    </q-parallax>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type PoemLine = {
  class?: string;
  text: string;
};

const props = defineProps<{
  image: string;
  texts: PoemLine[];
}>();

const imgSrc = computed(() => new URL(`../assets/img/${props.image}`, import.meta.url).href);
</script>

<style scoped lang="scss">
.poem {
  margin-bottom: 10px;
  position: relative;

  &::before {
    content: "";
    background-image: url('../assets/img/torn2.png');
    position: absolute;
    background-size: cover;
    top: -2px;
    height: 56px;
    width: 100%;
    left: 0;
    background-repeat: no-repeat;
    z-index: 5;
  }


  &__text {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #fcfaf7;
    font-family: "Noto Nastaliq Urdu", serif;
    z-index: 2;
    direction: ltr;
    text-align: center;
    font-weight: bold;
    margin-top: 25px;

    // line-height: normal;
    p {
      margin-bottom: 10px;

      &.comma {
        text-align: center;
      }
    }



  }

  &__overlay {
    position: absolute;
    inset: 0;
    background-color: black;
    opacity: 0.15;
    z-index: 2;
  }

  &__img {
    opacity: 0.9;
    // width: 100%;
    // height: 100%;
  }
}
</style>
