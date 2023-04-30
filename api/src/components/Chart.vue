<template>
  <Bar v-if="showGraph" :data="data" :options="options" />
  <button @click="showGraph = true">Click me to show the message</button>
</template>

<script setup>
import {
  Chart,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend
} from "chart.js";
import { Bar } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

</script>

<style scoped>

</style>