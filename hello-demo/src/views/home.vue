<template>
    <div>
        <!--展示组建内容-->
        <router-view/>
        <!--相当于一个容器 切换路由组件-->
        <ul class="footer">
            <!--切换/打开组建-->
            <li class="icons"><router-link :to="{name:'list'}">新聞列表</router-link></li>
            <li class="icons"><router-link :to="{name:'user'}">个人中心</router-link></li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped lang="scss">
li{
    list-style: none;
}
.footer {
    position: fixed;
    width: 100%;
    hight: 60px;
    line-height: 60px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
}
.icons {
    font-size: 16px;
    flex: 1;
    text-align: center;
    border-top: 1px solid #42b983;
    a {
        color: #42b983;
        display: block;
        &.active{
            color: #ffffff;
            background: #42b983;
        }
    }
}
</style>