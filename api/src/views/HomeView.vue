<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const dbn = ref("");
async function getDbn() {}
</script>

<style scoped></style>
