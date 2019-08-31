<template>
    <div>list
        <ul>
            <li v-for="(item,index) in pageLists" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    import store from '@/store'

    export default {
        name: "list",
        computed: {
            //实时获取展示数据
            pageLists() {
                return store.state.list;
            }
        }
    };

</script>

<style scoped>

</style>