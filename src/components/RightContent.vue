<template>
    <div class="RightContent">
        <el-row type="flex">
            <el-col :span="12">
                <BookItem />

            </el-col>
            <el-col :span="12">
                <BookItem />

            </el-col>
        </el-row>
       
    </div>
</template>

<script>
    import BookItem from './BookItem.vue';
    export default {
        name: 'RightContent',
        components: {
            BookItem,
        }
    }
</script>

<style scoped>
</style>