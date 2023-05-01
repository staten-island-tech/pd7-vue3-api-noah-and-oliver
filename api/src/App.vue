<template>
  <div>
    <table>
      <thead>
        <tr>
          <th @click="sortBy('dbn')">DBN</th>
          <th @click="sortBy('school_name')">School Name</th>
          <th @click="sortBy('num_of_sat_test_takers')">Number of SAT Test Takers</th>
          <th @click="sortBy('sat_critical_reading_avg_score')">SAT Critical Reading Average Score</th>
          <th @click="sortBy('sat_math_avg_score')">SAT Math Average Score</th>
          <th @click="sortBy('sat_writing_avg_score')">SAT Writing Average Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(school, index) in sortedSchools" :key="index">
          <td>{{ school.dbn }}</td>
          <td>{{ school.school_name }}</td>
          <td>{{ school.num_of_sat_test_takers }}</td>
          <td>{{ school.sat_critical_reading_avg_score }}</td>
          <td>{{ school.sat_math_avg_score }}</td>
          <td>{{ school.sat_writing_avg_score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default (await import ('vue')).defineComponent{
  data() {
    return {
      schools: [],
      sortKey: 'dbn',
      sortDirection: 1
    };
  },
  async mounted() {
    const response = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json?$query=SELECT%0A%20%20%60dbn%60%2C%0A%20%20%60school_name%60%2C%0A%20%20%60num_of_sat_test_takers%60%2C%0A%20%20%60sat_critical_reading_avg_score%60%2C%0A%20%20%60sat_math_avg_score%60%2C%0A%20%20%60sat_writing_avg_score%60');
    const data = await response.json();
    this.schools = data;
  },
  computed: {
    sortedSchools() {
      return this.schools.sort((a, b) => {
        const sortColumnA = a[this.sortKey];
        const sortColumnB = b[this.sortKey];
        if (sortColumnA < sortColumnB) {
          return -1 * this.sortDirection;
        }
        if (sortColumnA > sortColumnB) {
          return 1 * this.sortDirection;
        }
        return 0;
      });
    }
  },
  methods: {
    sortBy(sortKey) {
      if (this.sortKey === sortKey) {
        this.sortDirection *= -1;
      } else {
        this.sortKey = sortKey;
        this.sortDirection = 1;
      }
    }
  }
};
</script>
