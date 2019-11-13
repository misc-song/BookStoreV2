<template>
    <div class="LeftContent">
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 background-color="#fff"
                 text-color="#ccc"
                 active-text-color="#0cb1db">
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">分类1</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">分类2</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-menu"></i>
                <span slot="title">分类3</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">分类4</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">分类5</span>
            </el-menu-item>
        </el-menu>
    
    </div>
</template>

<script>
    export default {
        name: 'LeftContent',
        data() {
            return{
                msg : this.result
            }
        },
        props: {
            result: {
                type: Object,
            }
        },
        methods: {
            //clickMe() {
            //    console.log(this.result);
            //}
           
        }
    }
</script>

<style scoped>
    .el-menu {
        border: none;
    }

    .el-menu-item.is-active {
        color: #0cb1db;
        background-color: #ccc !important;
        border-right: 4px solid #409EFF;
    }

    .el-menu-item:hover {
        color: #0cb1db !important;
        background-color: rgba(12,12,12,0.1) !important
    }
</style>