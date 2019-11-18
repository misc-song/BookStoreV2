<template>
    <div class="Pagination">
        <el-pagination background layout="prev, pager, next" :total="total" :page-count="total" @current-change="handleCurrentChange">

        </el-pagination>
        <!--<button @click="getData">ddd</button>-->
    </div>
</template>

<script>
    export default {
        name: 'Pagination',     //组件名称
        props: {              //父组件传递过来的参数需要在props中进行注册
            result: {         //
                type: Object,
                default() {     //默认值
                    return {}   //如果是object类型 最好是返回空对象
                }
            },
        },
        data() {                //组件中的data 是一个函数 返回一个对象
            return {
                pageSize: 16,
                total: 0,
            }
        },
        methods: {              // 方法
            //绑定ElementUI current-change 事件 当分页页码改变的时候触发
            handleCurrentChange(val) {
                console.log("记录数" + this.result.total);
                console.log(`当前页: ${val}`);

                this.$emit('func', val);
            },
            getData() {
                console.log(this.result.total);
            },
            SetTotal(val) {         //父组件调用的方法 
                console.log(val);
                this.total = val;
            }
        },
        //watch: {
        //    total(val) {
        //        console.log("记录数" + this.result.total);
        //        console.log(this.result.total);
        //        //this.value = this.demo;
        //    }
        //},
        created() {                         //初始化成员
            this.total = this.result.total;
        },
        //beforeUpdate() {
        //    console.log("记录数" + this.result.total);
        //    this.total = this.result.total;
        //}
    }
</script>

<style scoped>
    .Pagination {
        margin: 0 auto;
        width: 444px;
    }
</style>