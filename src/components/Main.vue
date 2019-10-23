<template>
    <div class="Main" >
        <el-row>
            <el-col :span="4" :offset="3">
                <div class="Main_left">
                    <LeftContent/>
                </div>
               
            </el-col>
            <el-col :span="14" >
                <div class="Main_right">
                    <RightContent />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import LeftContent from './LeftContent.vue';
    import RightContent from './RightContent.vue';


    export default {
        name: 'Mian',
        components: {
            LeftContent,
            RightContent
        }
    }
</script>

<style scoped>
    .Main {
       margin-top:20px;
        /*border:1px red solid;*/
    }
    .Main_left {
        min-height: 800px;
        border-right:1px #ccc solid;
     
        
    }
    .Main_right {
        min-height: 800px;
        padding-left:20px;
    }
</style>