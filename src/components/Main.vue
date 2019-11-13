<template>
    <div class="Main">
        <NaviBar ref="searchContent" />
        <div class="Main_Content">
            <div class="Main_left">
                <!-- 通过v-if 进行条件渲染 如果不使用条件判断则子组件在钩子函数中的无法获取数据  -->
                <LeftContent v-if="Object.keys(result).length" v-bind:result="result" @func="LoadData" />
            </div>
            <div class="Main_right">
                <RightContent v-if="Object.keys(result).length" class="RightContent" v-bind:result="result" />
                <!-- 使用v-model 向子组件传递数据 （不是很懂 待了解） -->
                <!-- 详细信息： https://blog.csdn.net/weixin_41796631/article/details/83038198 -->
                <!--<RightContent v-model="result" v-if="Object.keys(result).length" class="RightContent"  />-->
            </div>
            <div class="Main_Bottom">
                <Pagination v-if="Object.keys(result).length" class="Pagination" v-bind:result="result" @func="LoadData" />
            </div>
        </div>
    </div>
</template>

<script>
    import LeftContent from './LeftContent.vue';
    import RightContent from './RightContent.vue';
    import Pagination from './Pagination.vue';
    import NaviBar from './NaviBar.vue';
    export default {
        name: 'Main',
        data() {
            return {
                type: Object,
                result: {},
            }
        },
        computed: {
            msg2() {
                return msg
            }
        },
        model: {
            prop: '',

        },
        props: {
            msg: String
        },
        components: {
            LeftContent,
            RightContent,
            Pagination,
            NaviBar
        },
        methods: {
            LoadData(pageIndex) {
                //使用axios发送get请求
                this.axios
                    .get('http://127.0.0.1:5555/api/Search/GetResult?pageSize=' + 16 + '&pageIndex=' + pageIndex + '&keywords=' + this.$refs.searchContent.input)
                    .then((response) => {
                        console.log(response.data);
                        this.result = {}
                        this.result = response.data;

                    }).catch((response) => {
                        console.log(response);
                    })
            }
        },
        //钩子函数 在组建创建完成后调用（用于初始化页面的原始数据）
        created() {
            //默认请求 当组建创建的时候
            this.axios
                .get('http://127.0.0.1:5555/api/Search/GetResult?pageSize=16&pageIndex=1&keywords=')
                .then((response) => {
                    //console.log(response.data);
                    this.result = response.data;
                }).catch((response) => {
                    console.log(response);
                })
        }
    }
</script>

<style scoped>
    .Main {
        min-height: 2000px;
        padding-top: 60px;
    }

    .Main_Content {
        margin: 0 auto;
        margin-top: 20px;
        width: 1200px;
        min-height: 800px;
        /*border:1px red solid;*/
    }

    .Main_left {
        width: 200px;
        min-height: 1800px;
        float: left;
        border-right: 1px #ccc solid;
    }

    .Main_right {
        width: 980px;
        float: right;
        min-height: 800px;
    }

    .Main_Bottom {
        float: right;
        width: 980px;
        margin-top: 20px;
    }
</style>