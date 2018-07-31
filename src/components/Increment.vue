<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="redecuHandle({de:7})"/>
      <span>{{count}}</span>
      <input type="button" value="+" @click="addHandle"/>
      <p>{{num2}}</p>
    </div>
  </div>
</template>

<script>
//vuex辅助函数
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {      
      //computed: mapState({
        // num : state => state.count
        // num: 'count'
        /* num(state){
           return state.count+100
         }
         */
        // count: 'count'  //渲染的时候写成{{count}}
      //}),
      // computed: mapState(['count'])
      // ,
      computed: {
        abc(){
          return 123
        },
        ...mapGetters({
          num2: 'filterCount'
        }),
        ...mapState(['count'])  //扩展对象，扩展运算符
      },
      methods: {
        ...mapActions({
          addHandle: 'addAction'
        }),
        // addHandle(){
        //  //触发一个action,异步
        //  this.$store.dispatch("addAction")
        // },

        /*
        redecuHandle(){
          this.$store.commit({
            type: "reduceIncrement",
            de:7
          })
        }
        */
       ...mapMutations({
         redecuHandle: 'reduceIncrement'
       })

      }

    }
/*
    export default {      
      computed: {
        num(){
          return this.$store.state.count
        },
        num2(){
          return this.$store.getters.filterCount
        }
      },
      methods: {
        addHandle(){
          //改变状态，提交mutation addIncrement
          // 
          // this.$store.commit("addIncrement",{
          //   n:5
          // })
          // 
         //触发一个action,异步
         this.$store.dispatch("addAction")
        },
        redecuHandle(){
          this.$store.commit({
            type: "reduceIncrement",
            de:7
          })
        }
      }

    }
  */
</script>
<style>

</style>
