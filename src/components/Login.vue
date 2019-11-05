<template>
    <div class="loginPage">
        <div class="form">


            <div class="login">
                <p><input type="text" name="name" value="" placeholder="用户名" /></p>
                <p><input type="password" name="name" value="" placeholder="密码" /></p>
                <p><input type="text" name="name" placeholder="验证码" /></p>
                <div class="submit">


                    <p><input class="submit_btn" type="button" name="name" value="登    录" /></p>
                </div>
            </div>
        </div>
        <!-- 如果想走的快的话 就一个人走 如果想走的远的话 就一起走 -->
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

    /*.login {
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
        padding-left: 2%;
        height: 46px;
        font-size: 18px;
        outline: none;
        border: none;
        color: #fff;
        background: 1px rgba(12,177,219,0.8);
    }

        .submit_btn:active {
            background: 1px rgba(12,177,219,1);
        }
</style>