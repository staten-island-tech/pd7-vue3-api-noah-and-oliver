<template>
  <Pie v-if="showGraph" :data="data" :options="options" />
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieComponent',
  components: {
    Pie
  },
  data() {
    return {
      showGraph: false,
      data: {
        labels: ['Manhattan', 'Brooklyn', 'Queens', 'Staten Island', 'Bronx'],
        datasets: [{ data: [] }]
      },
      options: {
        responsive: true
      }
    }
  },
  async mounted() {
    let res = await fetch(
      'https://data.cityofnewyork.us/resource/fuhs-xmg2.json?$select=borough&$limit=3000'
    )
    let dataYep = await res.json()

    this.data.labels.forEach((label) => {
      this.data.datasets[0].data.push(
        dataYep.filter((animal) => animal.borough == label).length
      )
    })

    this.showGraph = true
  }
}
</script>
            