<template>
    <div class="registerPage">
        <div class="form">
            <div class="register">
                <p><input type="text" name="name" value="" placeholder="用户名" /></p>
                <p><input type="password" name="name" value="" placeholder="密码" /></p>
                <p><input type="password" name="name" value="" placeholder="确认密码" /></p>
                <p><input type="text" name="name" placeholder="验证码" /></p>
                <div class="submit">
                    <p><input class="submit_btn" type="button" name="name" value="注    册" /></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>
    .registerPage {
        width: 1200px;
        height: 600px;
        margin: 0 auto;
        margin-top: 40px;
    }

    .form {
        padding: 40px;
        width: 400px;
        margin: 0 auto;
        border: 1px rgb(12,177,219);
        box-shadow: #0cb1db 0px 0px 20px;
    }

    /*.register {
        width: 374px;
    }*/

    input {
        height: 40px;
        width: 97%;
        padding-left: 2%;
    }

    span {
        display: inline-block;
        font-size: 20px;
        width: 80px;
    }

    .submit {
        height: 50px;
    }

    .submit_btn {
        width: 100%;
        /*float: right;*/
        height: 46px;
        font-size: 18px;
        outline: none;
        border: none;
        color: #fff;
        background: 1px rgba(12,177,219,0.8);
        /*不想写代码 忍不住看小说*/
    }

        .submit_btn:active {
            background: 1px rgba(12,177,219,1);
        }
</style>