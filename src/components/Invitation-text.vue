<template>
  <div class="invitation-text">
    <article class="q-pa-md invitation-article" data-aos="fade-up">
      <p>در میانه راهِ زندگی،</p>
      <p>دست در دست مهر،</p>
      <p>دل در گروِ عشق،</p>
      <p>به برکتی از سرنوشت رسیده‌ایم...</p>
      <br />

      <p>اکنون که فصل شکفتن دو دل فرا رسیده،</p>
      <p>و لبخندمان معنای تازه‌ای یافته،</p>
      <p>با کمال احترام از شما دعوت می‌کنیم</p>
      <p>تا در جشن پیوند دل‌هامان</p>
      <p>با حضورتان برکت و زیبایی بیافزایید.</p>
      <br />

      <p>شما را به تماشای آغاز این قصه‌ی مشترک فرا می‌خوانیم...</p>
      <p>چهارشنبه ۲۸ خرداد - ساعت ۱۸</p>
      <br />
      <p style="margin-bottom: 10px;">با مهر،</p>
      <p> نگین حداد  <span style="margin-inline: 3px;">و</span> پدارم  صوفی </p>

    </article>
  </div>

</template>


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
  direction: rtl;
  width: 100%;
  max-width: 800px;
  font-family: "Noto Nastaliq Urdu",
  serif;
  position: relative;
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
// }
</style>
