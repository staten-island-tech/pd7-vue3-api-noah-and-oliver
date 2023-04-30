<template>
  <Bar v-if="showGraph" :data="data" :options="options" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarComponent',
  components: {
    Bar
  },
  data() {
    return {
      showGraph: false,
      data: {
        labels: ['Native', 'Domestic', 'Invasive', 'Exotic', 'N/A'],
        datasets: [{ data: [] }]
      },
      options: {
        responsive: true
       
      }
    }
  },
  async mounted() {
    let res = await fetch(
      'https://data.cityofnewyork.us/resource/fuhs-xmg2.json?$select=species_status&$limit=3000'
    )
    let dataYep = await res.json()

    this.data.labels.forEach((label) => {
      this.data.datasets[0].data.push(
        dataYep.filter((animal) => animal.species_status == label).length
      )
    })

    this.showGraph = true
  }
}
</script>

<style scoped></style>
