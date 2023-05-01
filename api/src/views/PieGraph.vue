<template>
    <div>
        <PieComponent />
    </div>
</template>

<script>
import PieComponent from '../components/PieComponent.vue';
    export default(await import ('vue')).defineComponent{
        components: {
            PieComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>