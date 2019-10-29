<template>
    <div class="LeftContent">
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 background-color="#fff"
                 text-color="#ccc"
                 active-text-color="#0cb1db">
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'LeftContent',
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