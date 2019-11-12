<template>
    <div id="app">
        <HeadBar />
        
        <!--<Main />-->
        <router-view></router-view>
        <Home msg="Hello world!" />
    </div>
</template>

<script>

    import HeadBar from './components/HeadBar.vue';
    import Home from './components/Home.vue';
    import Main from './components/Main.vue';
    import './css/normalize.css';

    export default {
        name: 'app',
        components: {
            Home,
            HeadBar,
            Main,
        }
    };
    //人生啊，是这样不可预测。没有永恒
    //的痛苦，没有永恒的幸福。生活象流水一般，有时是那么平
    //展，有时又是那么曲折。

    //爱情，应该真正建立在现实生活坚实的基础上，否则，
    //它就是在活生生的生活之树上盛开的一朵不结果实的花……

    //有时候，现实生活中某些引起社会强烈震动的突发性事
    //件，往往是历史所发出的回声。
</script>

<style>
</style>

