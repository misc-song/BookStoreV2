<template>
    <div>
        <ul>
            <li v-for="item in results">
                <a href="javascript:;" class="img_box">
                    <img v-bind:src="item.pic_url">
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
    export default {
        name: 'Item',
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
                results: {}
            }
        },
        created() {
            console.log(this.result.total);
            //console.log(this.pageSize);
            this.total = this.result.total;
            this.results = this.result;
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