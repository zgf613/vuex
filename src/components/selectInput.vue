<template>
    <div class="clearFix">
      <input
        readonly="readonly"
        class="keyword"
        @click="showListHandle"
        :value="title"
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>

export default {
  props:["isShow"],    
  computed:{
    initShow(){
      return this.isShow
    },
    title(){
      return this.$store.state.selectModule.title
    }
  },
  methods: {   
    showListHandle(){
      this.$emit("update:isShow",!this.initShow)
    }
  }
  //需要取得父级一开始定义的列表的是否展示，来确定点击时展示与否
  //props接收父级的is-show,再用计算属性获取到它的初始值
}
</script>
