<template>
  <div class="q-px-lg q-py-md">


    <q-timeline layout="loose" color="primary">
      <q-timeline-entry v-for="(item, index) in timelineEntries" :key="`${item.title}-${index}`" :side="item.side"
        data-aos="fade-up" data-aos-duration="300">
        <template #title>
          <div class="timeline-item">
            <img class="timeline-item__icon" :src="iconSrc(item.icon)" :alt="item.title">

            <div v-if="item.time" class="timeline-item__time">{{ item.time }}</div>
            <div class="timeline-item__title">{{ item.title }}</div>
          </div>
        </template>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script setup lang="ts">
import { eventConfig } from 'src/content/eventConfig';

const timelineEntries = eventConfig.timeline;
const iconSrc = (icon: string) => new URL(`../assets/img/${icon}`, import.meta.url).href;
</script>

<style scoped lang="scss">
.texts {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 30px;
  font-family: "Vazirmatn", sans-serif;
  font-size: 30px;
  color: $primary;

  >p {
    font-weight: 500;
    text-align: center;
  }
}

.timeline-item {
  display: flex;
  flex-direction: column;
  // align-items: flex-end;

  align-items: center;
  justify-content: center;
  color: $primary;
  gap: 0.5rem;
  font-family: "Vazirmatn", sans-serif;

  &__icon {
    width: 80px;
    fill: $primary;
  }

  &__time {
    font-size: 20px;
    font-weight: bold;
  }

  &__title {}
}
</style>
