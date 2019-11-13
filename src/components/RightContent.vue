<template>
    <div class="RightContent">
        <!-- <Item v-bind:result="result" />-->
        <ul>
            <li v-for="item in result.result" :key="item.id">
                <span>{{item.id}}</span>
                <a href="javascript:;" class="img_box">
                    <!--当图片错误时（无法加载资源） 触发onerror 事件 重新绑定图片 onerror -->
                    <img v-bind:src="item.pic_url" :onerror="defalutImg">
                </a>
                <p>
                    <span class="name">
                        <a href="javascript:;" class="clickName" v-bind:title="item.title">
                            <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{item.title}}</font></font>
                        </a>
                    </span>
                    <span class="author" :title="item.author">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">{{item.author}}</font>
                        </font>
                    </span>
                    <span class="info">
                        <i>
                            <em class="press"></em>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    {{item.publisher}}
                                </font>
                            </font>
                        </i>
                        <i>
                            <em class="time"></em>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">{{item.publish_time}}</font>
                            </font>
                        </i>
                    </span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    //import Item from './Item.vue';
    import errorPhoto from '@/assets/default.png';
    export default {
        name: 'RightContent',
        //使用model传值和绑定数据（不懂  待了解） 具体可以看 父组件中的链接
        //model: {
        //    prop: 'xxx',
        //    event: 'changeXXX'
        //},
        data() {
            return {
                  defalutImg: 'this.src="' + errorPhoto + '"',
            }
        },
        props: {
            result: {
                type: Object,
                default() {     //默认值
                    return {}   //如果是object类型 最好是返回空对象
                }
            },
        },
        components: {
            //Item,
        },
        created() {
            console.log(this.defalutImg)
            console.log(this.result.length);
        },
        mounted() {
              console.log(this.defalutImg)
        }
    }
</script>

<style scoped>

    li {
        float: left;
        width: 420.5px;
        height: 175px;
        padding: 20px;
        border: 1px solid #e4e4e4;
        margin: -1px 0 0 -1px;
        position: relative;
        list-style: none;
    }

        li:hover {
            background-color: rgba(12,12,12,0.1)
        }

    .img_box {
        width: 118px;
        height: 166px;
        position: absolute;
        left: 20px;
        top: 20px;
    }

    a.img_box img {
        width: 100%;
        height: 100%;
    }

    p {
        padding-left: 138px;
        display: block;
    }

    span {
        display: block;
    }

        span.name {
            font-size: 16px;
            height: 45px;
            overflow: hidden;
        }

            span.name a {
                color: #555;
            }

        span.author {
            color: #999;
            line-height: 50px;
        }

        span.info {
            color: #999;
            margin-bottom: 13px;
            font-size: 12px;
        }

    a {
        text-decoration: none;
    }
</style>