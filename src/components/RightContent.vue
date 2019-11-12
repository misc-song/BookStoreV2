<template>
    <div class="RightContent">
        <Item v-if="Object.keys(result).length" v-bind:result="result" />
    </div>
</template>

<script>
    import Item from './Item.vue';
    export default {
        name: 'RightContent',
        props: {
            result: {
                type: Object,
                default() {     //默认值
                    return {}   //如果是object类型 最好是返回空对象
                }
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