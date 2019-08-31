<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index"
                @click="choose(index)"
            :class="{active: index == current}">{{item}}</li>
        </ul>
        <button type="button" @click="add()">添加</button>
        <ul>
            <li v-for="(item,index) in listCopy" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "demo1",
        data() {
            return {
                list: [1, 2, 3, 4],
                listCopy: [],
                current: -1
            }
        },
        methods: {
            choose(index){
                this.current = index;
            },
            add(){

                if(this.current == -1){
                    return;
                }
                this.listCopy.push(this.list[ this.current]);
                this.current = -1;
            }
        }
    }
</script>

<style scoped>
li.active{
    background: green;
}
</style>