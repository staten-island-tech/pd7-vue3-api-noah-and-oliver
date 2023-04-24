<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const SAT = ref('')
async function getSAT() {
  let res = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  let data = await res.json()
  sat.value = data.results
}
onMounted(() =>{
  getPokemon()
})
</script>

<style scoped></style>
