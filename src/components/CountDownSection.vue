<template>
  <div class="countdown">
    <div class="timer">
      <div class="time-unit">
        <span class="number">{{ countdown.days }}</span>
        <span class="label">Days</span>
      </div>
      <div class="time-unit">
        <span class="number">{{ countdown.hours }}</span>
        <span class="label">Hours</span>
      </div>
      <div class="time-unit">
        <span class="number">{{ countdown.minutes }}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="time-unit">
        <span class="number">{{ countdown.seconds }}</span>
        <span class="label">Seconds</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { eventConfig } from 'src/content/eventConfig';

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

const targetDate = new Date(eventConfig.countdown.targetDate);

const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  countdown.value.days = Math.floor(totalSeconds / (60 * 60 * 24));
  countdown.value.hours = Math.floor((totalSeconds / 3600) % 24);
  countdown.value.minutes = Math.floor((totalSeconds / 60) % 60);
  countdown.value.seconds = totalSeconds % 60;
};

let interval: ReturnType<typeof setInterval> | undefined;
onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.countdown {
  text-align: center;
  padding: 1rem;
  padding-top: 25px;
  background-color: #f1e9de;
  color: #585045;
  font-family: "Vazirmatn", sans-serif;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.timer {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.time-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
}

.number {
  font-size: 3rem;
}

.label {
  font-size: 1rem;
  margin-top: 0.5rem;
}
</style>
