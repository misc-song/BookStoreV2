<template>
    <div id="app">
        <HeadBar />
        <NaviBar />
        <!--<Main />-->
        <router-view></router-view>
        <Home msg="Hello world!" />
    </div>
</template>

<script>

    import HeadBar from './components/HeadBar.vue';
    import Home from './components/Home.vue';
    import NaviBar from './components/NaviBar.vue';
    import Main from './components/Main.vue';
    import './css/normalize.css';

    export default {
        name: 'app',
        components: {
            Home,
            HeadBar,
            NaviBar,
            Main,
        }
    };
</script>

<style>
</style>

