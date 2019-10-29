<template>
    <div class="Main">

        <div class="Main_left">
            <LeftContent />
        </div>
        <div class="Main_right">

            <RightContent />
        </div>

    </div>
</template>

<script>
    import LeftContent from './LeftContent.vue';
    import RightContent from './RightContent.vue';


    export default {
        name: 'Main',
        components: {
            LeftContent,
            RightContent
        }
    }
</script>

<style scoped>
    .Main {
        margin: 0 auto;
        margin-top: 20px;
        width: 1200px;
        /*border:1px red solid;*/
    }

    .Main_left {
        width:200px;
        min-height: 800px;
        float:left;
        border-right: 1px #ccc solid;
    }

    .Main_right {
        width: 980px;
        float: right;
        min-height: 800px;
    }
</style>