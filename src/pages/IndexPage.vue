<template>
  <q-page>
    <!-- <div class="q-pa-none scroll-container">
      <MainHero class="page" />
      <BannerSection class="page" />
      <div class="page">
        <TimeLineSection />

      </div>
    </div> -->
    <div class="fullpage">
      <div class="fullpage-bg"></div>
      <div class="page-container">

        <MainHero />
        <!-- <div class="wedding-time">
        the wedding time
      </div> -->
        <InvitationText />
        <BannerSection />
        <TimeLineSection />
        <div style="background-color:#f1e9de;">
          <PoemSection :image="poemContent.image" :texts="[...poemContent.texts]" />
          <CountDownSection />
          <AddressSection />
        </div>
    </div>
    </div>






  </q-page>
</template>

<script setup lang="ts">
import MainHero from 'src/components/MainHero.vue';
import BannerSection from 'src/components/BannerSection.vue';
import TimeLineSection from 'src/components/TimeLineSection.vue';
import PoemSection from 'src/components/PoemSection.vue';
import CountDownSection from 'src/components/CountDownSection.vue';
import InvitationText from 'src/components/Invitation-text.vue';
import AddressSection from 'src/components/AddressSection.vue';
import { eventConfig } from 'src/content/eventConfig';

const poemContent = eventConfig.poem;
</script>

<style>
.scroll-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.page {
  min-height: 100vh;
  scroll-snap-align: start;
}

.wedding-time {
  width: 100%;
  height: 10vh;
  background-color: #f1e9de;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-family: "Love Light", cursive;
  color: #585045;
}

.fullpage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

}

.fullpage-bg {
  background-image: url('../assets/img/hero.jpg');
  background-size: cover;
  /* background-position: center; */
  filter: blur(5px);
  position: fixed;
  z-index: -1;
  inset: 0;
}

.page-container {
  width: 480px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: white;
  overflow-y: hidden;


}
</style>
