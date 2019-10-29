<template>
    <div>
        <el-pagination background layout="prev, pager, next" :total="total">
        </el-pagination>
    </div>
  
</template>

<script>
    export default {
        name: 'Pagination',
        data() {
            return {
                index: null,
                pageSize:null,
                total: 100,

            }
        }
    }
</script>

<style scoped>
</style>