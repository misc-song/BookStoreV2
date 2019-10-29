<template>
    <div>
        <el-pagination background layout="prev, pager, next" :total="total"  @current-change="handleCurrentChange">

        </el-pagination>
        <!--<button @click="getData">ddd</button>-->
    </div>

</template>

<script>
    export default {
        name: 'Pagination',
        props: {
            result: {
                type: Object,
                default() {
                    return {}
                }
            },

        },
        data() {
            return {
                pageSize: 10,
                total: 0,
                
            }
        },
        methods: {
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