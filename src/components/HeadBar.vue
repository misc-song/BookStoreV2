<template>
    <div class="HeadBar">
        <el-row class="head_row">
            <el-col :span="18" :offset="3">
                <div class="left_head ">
                    <router-link to="/Main">
                        <div class="logo">
                            <img src="#" alt="Alternate Text" />
                        </div>
                        <div class="sitename">
                            TestPage
                        </div>
                    </router-link>
                </div>
                <div class="right_head ">
                    <!--<span><a class="head_link" href="#">登录</a></span>
                    <span><a class="head_link" href="#">注册</a></span>-->
                    <span><router-link to="/Login">login</router-link></span>
                    <span><router-link to="/Register">register</router-link></span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'HeadBar',
      
    };
</script>

<style scoped>
    .HeadBar {
        background-color: #333;
    }

    .head_row {
        height: 60px;
    }

    .left_head {
        margin-top: 18px;
        float: left;
        width: 237px;
    }

    .right_head {
        margin-top: 18px;
        float: right;
    }

    .berder_1px {
        border: 1px red solid;
    }

    .logo {
        float: left;
    }

    .sitename {
        width: 82px;
        line-height: 24px;
        color: #0cb1db;
        font-size: 22px;
        float: right;
        padding-left: 13px;
        border-left: 1px solid #fff;
        cursor: pointer;
    }

    .head_link{
        color: #fff;
        text-decoration:none;
        font-size:18px;
    }
</style>