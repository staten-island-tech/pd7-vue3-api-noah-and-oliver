<template>
    <div>
      <canvas ref="chart"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js';
  
  export default(await import ('vue')).defineComponent{
    data() {
      return {
        schools: []
      };
    },
    async mounted() {
      const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json?$query=SELECT%0A%20%20%60dbn%60%2C%0A%20%20%60school_name%60%2C%0A%20%20%60num_of_sat_test_takers%60%2C%0A%20%20%60sat_critical_reading_avg_score%60%2C%0A%20%20%60sat_math_avg_score%60%2C%0A%20%20%60sat_writing_avg_score%60');
      const data = await response.json();
      this.schools = data;
      this.drawChart();
    },
    methods: {
      drawChart() {
        const ctx = this.$refs.chart.getContext('2d');
        const sortedData = this.schools.sort((a, b) => b.num_of_sat_test_takers - a.num_of_sat_test_takers);
        const labels = sortedData.slice(0, 5).map(school => school.school_name);
        const data = sortedData.slice(0, 5).map(school => school.num_of_sat_test_takers);
        const colors = ['#3c79a9', '#f29e2c', '#e11759', '#76f7b2', '#59a14f'];
        const chartData = {
          labels,
          datasets: [
            {
              data,
              backgroundColor: colors
            }
          ]
        };
        new Chart(ctx, {
          type: 'doughnut',
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              position: 'right'
            }
          }
        });
      }
    }
  };
  </script>
  