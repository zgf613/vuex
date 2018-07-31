
<template>
    <ul class="list">
      <li v-for="(item,index) in data" @click="getTitleHandle(item.title)" :key="index">{{item.title}}</li>
    </ul>
</template>
<script>
export default {
    computed:{
        data(){
            return this.$store.state.selectModule.list;
        }
    },
    methods:{
        getTitleHandle(title){
            this.$store.commit("changeTitle",{title})
        }
    },
    created(){
        //获取数据
        this.$store.dispatch('getListAction')
    }
}
</script>

<!--
<template>
    <ul class="list">
      <li v-for="(item,index) in data" @click="getTitleHandle(item.title)" :key="index">{{item.title}}</li>
    </ul>
</template>
<script>

export default {
    props:["data"],
    methods:{
        getTitleHandle(title){
            this.$emit("changeTitle",title)
        }
    }
}
</script>
-->

