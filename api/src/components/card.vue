<template>
    <div class="card">
<h2>{{ sat.num_of_sat_test_takers }}</h2>
    </div>
</template>

<script setup>
const props = ({
    satTakers: Number,
    satMath: Number,
    satELA: Number,
})
</script>

<style scoped>

</style>