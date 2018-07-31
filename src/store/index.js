import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
//定义一个容器
//划分模块module
let selectModule = {
    state: {
        title: 'hello',
        list: []
    },
    mutations: {
        changeTitle(state,payload){
            state.title = payload.title;
        },
        changeList(state,list){
            state.list = list;
        }
    },
    actions:{
        getListAction({commit}){
            //发送请求
            axios.get('https://easy-mock.com/mock/5b5ef30608cd36358a56d2d5/list/list')
                .then( (data)=>{
                    commit("changeList",data.data);  
                    //拿到数据后，提交mutation，改变状态
                    console.log(data.data)
                })
                .catch( (error)=> {
                    console.log(error)
                })
        }
    }
}
let store = new Vuex.Store({
    state: {
        count:100
    },
    getters:{
        filterCount(state){
            return state.count >= 120 ? 120: state.count;
        }
    },
    mutations: {
        addIncrement(state,payload){
            state.count += payload.n;
        },
        reduceIncrement(state,payload){
            state.count -= payload.de;
        }
    },
    actions: {
        /*
        addAction(context){  //contenxt是个对象，不是当前实例，只不过包括实例中的方法
           console.log(context)
            setTimeout(()=>{
                //改变状态，提交mutations
                context.commit("addIncrement",{n:5})
                context.dispatch("textAction",{text:"测试"})
            },1000)
        },
        textAction(context,obj){
            console.log(obj)
        }
        */
       //利用ES6里面的结构赋值,把一个对象的属性拿出来放在{}里，就可以直接用了
        addAction({commit,dispatch}){  //
            // console.log(context)
            setTimeout(()=>{
                //改变状态，提交mutations
                commit("addIncrement",{n:5})
                dispatch("textAction",{text:"测试"})
            },1000)
        },
        textAction(context,obj){
            console.log(obj)
        }
    },
    modules:{
        selectModule
    }
})
export default store
/*
    mutations，只能是同步操作
    Actions是包含异步操作，提交mutations改变状态
*/