<template>
  <div class="invitation-text">
    <article class="q-pa-md invitation-article" data-aos="fade-up">
      <p v-for="(line, index) in invitationParagraphs" :key="`${line.text}-${index}`">
        {{ line.text }}
      </p>
    </article>
  </div>

</template>

<script setup lang="ts">
import { eventConfig } from 'src/content/eventConfig';

const invitationParagraphs = eventConfig.invitation.paragraphs;
</script>

<style scoped lang="scss">
.invitation-text {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 15px;

}

.invitation-article {
  // background: #f1e9de;
  // padding: 30px;
  position: relative;
  direction: ltr;
  text-align: center;
  width: 100%;
  max-width: 800px;
  font-family: "Georgia", serif;
  color: #c6b49c;
  font-size: 18px;
  // box-shadow: -5px 12px 41px -4px rgba(0, 0, 0, 0.61);
  // -webkit-box-shadow: -5px 12px 41px -4px rgba(0, 0, 0, 0.61);
  // -moz-box-shadow: -5px 12px 41px -4px rgba(0, 0, 0, 0.61);
  // font-size: 18px;

  p {
    margin-bottom: 5px;
  }


}

.flower {
  position: absolute;
  left: 0;
  bottom: 0;

  @media (max-width: 600px) {
    left: -50px;
  }

  @media (max-width: 500px) {
    width: 100px;
    left: 0;
    bottom: -10px;
  }


}

// .invitation-article::after {
//   content: "";
//   position: absolute;
//   // top: 100%;
//   height: 40px;
//   width: 100%;
//   left: 0;
//   bottom: -35px;
//   background: url(../assets/img/invitation-container.svg) bottom;
//   background-size: 200%;
// }</style>
