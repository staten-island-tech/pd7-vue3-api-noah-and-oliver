<template>
    <div>
<h1>test</h1>
    </div>
</template>

<script>
export default {
    data(){
    return{
        animal: {}
    }
    },
    mounted: async function(){
        await getAnimal()
    },method:{
        getAnimal:{
            async function() {
  let res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
  let data = await res.json()
  animal.value = data 
   console.log(animal.value )
}
        }
    }
    
}
</script>

<style scoped>
</style>