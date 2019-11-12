<template>
    <div class="RightContent">
        <Item />
    </div>
</template>

<script>
    import Item from './Item.vue';
    export default {
        name: 'RightContent',
        props: {
            result: {
                type: Object,
            }
        },
        components: {
            Item,
        }
    }
    //好马不吃回头草
    //佛说 遇见和错过都是缘分 有缘 即使错过也还能遇见 
</script>

<style scoped>
</style>