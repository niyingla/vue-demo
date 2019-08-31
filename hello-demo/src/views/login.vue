<template>
    <div>
        <form action="" v-if="!isReg">
            <div>
                用户名:
                <input type="text" v-model="name"/>
            </div>
            <div>
                密码：
                <input type="password" v-model="password"/>
            </div>
            <button type="button" @click="login()">登录</button>
            <button type="button" @click="register()">注册</button>
        </form>
        <form action="" v-else>
            用户名
            <input type="text" v-model="name"/>
            用户名
            <input type="password" v-model="password"/>
            再次输入密码
            <input type="password" v-model="rePassword"/>
            <button type="button" @click="addUser()">确认</button>
            <button type="button" @click="cancel()">取消</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                isReg: false,
                name:'',
                password:'',
                rePassword:''
            }
        },
        methods:{
            login() {
                if (localStorage.getItem("name") === this.name&&localStorage.getItem("password") === this.password) {
                    //跳到这里
                    this.$router.push('/home/list');
                }else {
                    alert("用戶名或密碼錯誤");
                }

            },
            register(){
                this.isReg = true;
            },
            addUser(){
                if( this.password === this.rePassword){
                    localStorage.setItem("name", this.name);
                    localStorage.setItem("password", this.password);
                    this.name = '';
                    this.password = '';
                    this.isReg = false;
                }else {
                    alert("两次密码输入不一致");
                }


            },
            cancel(){
                this.isReg = false;
            }
        }
    }
</script>

<style scoped>

</style>