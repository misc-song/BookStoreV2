<template>
    <div>
        <el-pagination background layout="prev, pager, next" :total="total"  @current-change="handleCurrentChange">

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
                pageSize: 10,
                total: 0,
            }
        },
        methods: {              // 方法
            //绑定ElementUI current-change 事件 当分页页码改变的时候触发
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.$emit('func', val);
            },
            getData() {
                console.log(this.result.total);
            },
        },
        created() {
            //console.log(this.result);
            //console.log(this.pageSize);
            this.total = this.result.total;
        }
    }
</script>

<style scoped>
</style>