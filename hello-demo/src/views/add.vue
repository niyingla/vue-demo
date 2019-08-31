<template>
    <div>
        <p>标题</p>
        <input type="text" v-model="title"/>
        <p>内容</p>
        <input type="text" v-model="content"/>
        <div>
            <button class="btn" @click="add()">添加</button>
        </div>
    </div>
</template>

<script>
    import store from '@/store'

    export default {
        name: "add",
        data() {
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            add() {
                //跨组建传播参数
                store.commit('addItem', {title: this.title, content: this.content});
                this.title = '';
                this.content = '';
                //跳转
                this.$router.push("/home/list");

            }
        }
    }
</script>

<style scoped>

</style>