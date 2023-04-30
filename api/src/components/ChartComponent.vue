<template>
  <Bar v-if="showGraph" :data="data" :options="options" />
  <button @click="showGraph = true">Click me to show the message</button>
</template>

<script>
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

export default {
  name: "App",
  components: {
    Bar,
  },
  data() {
    return {
      showGraph: false,
      data: {
        labels: ["Birds", "Small Mammals-RVS", "Deer"],
        datasets: [{ data: [] }],
      },
      options: {
        responsive: true,

      },
    };
  },
  async mounted() {
    let res = await fetch(
      "https://data.cityofnewyork.us/resource/fuhs-xmg2.json"
    );
    let dataYep = await res.json();
    console.log(dataYep);
    const Birds = dataYep.filter(
      (animalYes) => animalYes.animal_class === "Birds"
    );
    this.data.datasets[0].data.push(Birds.length);
    console.log(Birds.length)
    const gray = dataYep.filter(
      (animalYes) => animalYes.animal_class === "Small Mammals-RVS"
    );
    this.data.datasets[0].data.push(SmallMammalsRVS.length);
    console.log(dataYep)
    console.log(SmallMammalsRVS.length)
    console.log(dataYep)
    const cinnamon = dataYep.filter(
      (animalYes) => animalYes.animal_class === "Deer"
    );
    this.data.datasets[0].data.push(Deer.length);
    console.log(Deer.length)
  },
};
</script>



<style scoped></style>