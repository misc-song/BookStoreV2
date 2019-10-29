<template>
    <div class="RightContent">
        <Item/>

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
</script>

<style scoped>
</style>