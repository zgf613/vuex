<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync="listShow"></select-input> 
        <!-- 把数据传给子组件（自定义属性），子组件中改变状态，改变父组件中的状态，双向绑定 sync同步-->
      <list v-show="listShow"></list>
      </div>
    </section>
</template>
<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

export default {
  data(){
    return {
      listShow: false
    }
  },
  methods:{
    titleHandle(title){
      console.log(title)
      this.title = title
    }
  },
  components: {
    selectInput,
    list
  }
}
</script>



<!-- 这是第一版没有用vuex的-->
<!--
<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync="listShow" :title="title"></select-input> 
-->  
        <!-- 把数据传给子组件（自定义属性），子组件中改变状态，改变父组件中的状态，双向绑定 sync同步-->
<!--        <list v-show="listShow" :data="listData" @changeTitle="titleHandle"></list>
      </div>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

let listData = [
  {
    title: 'javascript'
  },
  {
    title: 'html+css'
  },
  {
    title: 'jQuery'
  },
  {
    title: 'react'
  },
  {
    title: 'nodejs'
  }
]
export default {
  data(){
    return {
      listShow: false,
      listData: listData,
      title: ''
    }
  },
  methods:{
    titleHandle(title){
      console.log(title)
      this.title = title
    }
  },
  components: {
    selectInput,
    list
  }
}
</script>
-->

