<template>
    <div class="cards">
      <Card
        v-for="animal in animals"
        :key="animal._311sr_number"
        :borough="animal.borough"
        :property="animal.property"
        :location="animal.location"
        :species="animal.species_description"
      />
    </div>
  </template>
  
  <script>
  import Card from '../components/Card.vue'
  export default {
      data() {
          return {
              animals: []
          };
      },
      methods: {
          getAnimal: async function () {
              let res = await fetch("https://data.cityofnewyork.us/resource/fuhs-xmg2.json");
              let data = await res.json();
              data.forEach(animal => {
                  this.animals.push(animal);
              });
          }
      },
      mounted: async function () {
          await this.getAnimal();
      },
      components: { Card }
  }
  </script>
  
  <style scoped>
    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  </style>
  