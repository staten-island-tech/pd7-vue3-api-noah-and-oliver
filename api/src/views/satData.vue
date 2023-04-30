<template>
    <div>
<h1>test</h1>
    </div>
</template>

<script>
export default{
    data(){
    return{
        SAT: {}
    }
    },
    mounted: async function(){
        await getSAT()
    },method:{
        getSAT:{
            async function() {
  let res = await fetch('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  let data = await res.json()
  SAT.value = data 
   console.log(SAT.value )
}
        }
    }
    
}
</script>

<style scoped>
</style>