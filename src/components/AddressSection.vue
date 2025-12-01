<template>
  <div class="address">
    <div class="address__boxes">
      <div class="address__item">
        <span class="item__title">{{ venue.addressLabel }}</span>
        <span class="item__value">
          {{ venue.address }}
        </span>
      </div>
      <div class="address__item">
        <span class="item__title">{{ venue.navigationLabel }}</span>
        <div class="link-container">
          <a v-for="link in venue.mapLinks" :key="link.url" class="link-item" :href="link.url" target="_blank"
            rel="noopener noreferrer">
            <img :src="iconSrc(link.icon)" :alt="link.label" />
          </a>
        </div>
      </div>
    </div>

  </div>
  <div class="address__location">
    <iframe :src="venue.embedUrl" width="600" height="450" style="border:0;" allowfullscreen loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script setup lang="ts">
import { eventConfig } from 'src/content/eventConfig';

const venue = eventConfig.venue;
const iconSrc = (icon: string) => new URL(`../assets/img/${icon}`, import.meta.url).href;
</script>


<style lang="scss" scoped>
.address {
  // padding: 50px;
  // padding-bottom: 0;
  direction: ltr;
  margin-block: 1rem;
  padding-inline: 2rem;

  &__boxes {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    font-family: "Vazirmatn", sans-serif;

  }

  &__item {
    // padding: 20px;
    padding: 5px;
    border-radius: 10px;
    background-color: #f1e9de;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #585045;

    .item__title {
      font-size: 24px;
      font-weight: bold;
    }

    .item__value {
      margin-top: 5px;
    }

    .link-container {
      display: flex;
      gap: 15px;
      margin-top: 5px;

      .link-item {
        >img {
          width: 35px;
        }
      }
    }
  }

  &__location {
    width: 100%;

    >iframe {
      width: 100%;
    }
  }
}
</style>
