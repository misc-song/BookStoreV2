<template>
    <div class="NaviBar">
        <el-row>
            <el-col :span="18" :offset="3" class="naviContent">
                <div class="hb-left">
                    <div class="home">
                        <a class="link" href="#">
                            <div>
                                <img src="../assets/home.gif" class="home_icon" />&nbsp;主页
                            </div>
                        </a>
                    </div>
                </div>
                <div class="hb-right">
                    <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                        <el-select v-model="select" slot="prepend" class="el-select">
                            <el-option label="书名" value="1"></el-option>
                            <el-option label="ISBN" value="2"></el-option>
                            <el-option label="作者" value="3"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'NaviBar',
        data() {
            return {
                input: '',
                select: '1',
                searchContent: {
                    input: this.input,
                    select: this.select,
                }
            }
        }

    }
</script>

<style scoped>
    .NaviBar {
        
        height: 122px;
        background-image: url('../assets/bg.jpg');
        background-repeat: repeat-x;
    }

    .naviContent {
        margin-top: 35px;
    }

    .hb-left {
        height: 40px;
        margin-top: 10px;
        float: left;
    }

    .home_icon {
        width: 20px;
        height: 20px;
        vertical-align: top;
    }

    .hb-right {
        height: 40px;
        float: right;
    }

    .el-select {
        width: 80px;
    }

    .link {
        /*line-height: 16px;*/
        text-decoration: none;
        color: #0cb1db;
    }

    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>