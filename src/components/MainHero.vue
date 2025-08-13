<template>
  <div class="invite-wrapper">
    <!-- Hidden SVG for clip path -->
    <div class="invite-mobile">
      <div class="img-bg">
      </div>
      <div class="info" data-aos="fade-up">
        <div class="names negin">Negin</div>
        <div class="names pedram">Pedram</div>
        <div class="dates">
          <span class="date">1404.06.07</span>
          -
          <span class="date">2025.08.29</span>
        </div>
        <!-- <span class="line"></span>
        <div class="place">
           <span>TAKHTEH JAMSHID PLAZA</span>
           <span>MASHHAD</span>
        </div> -->

      </div>
    </div>

    <div class="wedding-text"></div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.invite-wrapper {}

.invite-mobile {
  // width: 320px;
  // height: 100vh;
  position: relative;
  min-height: 110vh;
  display: flex;


  .img-bg {
    position: absolute;
    inset: 0;
    height: 110vh;
    background-image: url(../assets/img/hero.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    // filter: blur(2px);
    background-position: center;
    margin-top: -5px;


    // >img {
    //   width: 100%;
    //   height: 100%;
    //   z-index: 1;
    // }
  }




  .info {
    position: absolute;
    bottom: 25%;
    color: white;
    color: #c6b49c;

    display: flex;
    flex-direction: column;
    z-index: 6;
    padding-inline: 35px;
    width: 100%;
    background-color: rgba($color: #000000, $alpha: 0.4);
    padding-block: 15px;
  }

  .names {
    font-family: "Love Light", cursive;
    // margin-left: 20px;

    font-weight: 500;
    font-size: 80px;
    height: 100px;

    &.pedram {
      // margin-left: 50%;
      direction: rtl;
    }

    // @media (max-width: 470px) {
    //   font-size: 70px;
    //   /* … */
    // }


  }

  .dates {
    display: flex;
    gap: 10px;
    font-family: "Comme", sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-inline: auto;
    margin-top: 10px;
  }


  .line {
    width: 1px;
    height: 20px;
    background-color: white;
  }

  .place {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Comme", sans-serif;
    font-size: 14px;
  }
}



.wedding-text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-family: "Love Light", cursive;
  color: white;
  position: relative;

  &::before {
    content: "";
    background-image: url('../assets/img/torn1.png');
    position: absolute;
    background-size: cover;
    bottom: -10px;
    height: 65px;
    width: 100%;
    left: 0;
    background-repeat: no-repeat;
  }

}


.overlay-text {
  // text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

}
</style>
