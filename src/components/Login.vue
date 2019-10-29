<template>
    <div class="loginPage">
        <div class="form">


            <div class="login">
                <p><span>用户名</span><input type="text" name="name" value="" /></p>
                <p><span>密&nbsp;&nbsp;&nbsp;码</span><input type="password" name="name" value="" /></p>
                <p><span>验证码</span><input type="text" name="name" /></p>
                <div class="submit">


                    <p><input class="submit_btn" type="button" name="name" value="登录" /></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    .loginPage {
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

    .login {
        width: 374px;
    }

    input {
        height: 40px;
        width: 280px;
        margin-left: 10px;
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
        width: 285px;
        float: right;
        height: 46px;
        font-size:18px;
        outline:none;
        border:none;
        color:#fff;
           background: 1px rgba(12,177,219,0.8);
    }
    .submit_btn:active{
           background: 1px rgba(12,177,219,1);
    }
</style>