import Vuex from "vuex"
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      HabitList : new Array(),
      RiskyList : new Array(),
      RiskyEventLIst : new Array(),
      SRiskyEventDetail : new Object(),
      SafeList : new Array(),
      SafeEventDetail : new Object(),
      TotalEventMoney : new Array()
    },
    mutations: {
      HabitListMutaion(state,data){
        return state.HabitList=data
      },
      RiskyListMutation(state,data){
        return state.RiskyList=data
      },
      RiskyEventLIstMutation(state,data){
        return state.RiskyEventLIst=data
      },
      RiskyEventDetailMutation(state,data){
        return state.RiskyEventDetail=data
      },
      SafeListMutation(state,data){
        return state.SafeList=data
      },
      SafeEventDetailMutation(state,data){
        return state.SafeEventDetail=data
      },
      TotalEventMoneyMutation(state,data){
        return state.TotalEventMoney=data
      }

    },
    actions:{
      HabitListAction({commit}){
        axios.get('http://localhost:3000/HabitListSend')
        .then((res)=>{
          console.log(res.data)
          commit('HabitListMutaion',res.data)
        });
      },
      RiskyListAction({commit}){
        axios.get('http://localhost:3000/RiskyListSend')
        .then((res)=>{
          console.log(res.data)
          commit('RiskyListMutation',res.data)
        });
      },
      RiskyEventLIstAction({commit},EventName){
        axios.get(`http://localhost:3000/RiskyEventLIstSend/:${EventName}`)
        .then((res)=>{
          console.log(res.data)
          commit('RiskyEventLIstMutation',res.data)
        });
      },
      RiskyEventDetailAction({commit},EventName,categoryname){
        axios.get(`http://localhost:3000/RiskyEventDetailSend/:${EventName}/:${categoryname}`)
        .then((res)=>{
          console.log(res.data)
          commit('RiskyEventDetailMutation',res.data)
        });
      },
      SafeListAction({commit}){
        axios.get('http://localhost:3000/SafeListSend')
        .then((res)=>{
          console.log(res.data)
          commit('SafeListMutation',res.data)
        });
      },
      SafeEventDetailAction({commit},Eventname){
        axios.get(`http://localhost:3000/SafeEventDetailSend/:${Eventname}`)
        .then((res)=>{
          console.log(res.data)
          commit('SafeEventDetailMutation',res.data)
        });
      },
      TotalEventMoneyAction({commit}){
        axios.get(`http://localhost:3000/TotalEventMoneySend`)
        .then((res)=>{
          console.log(res.data)
          commit('TotalEventMoneyMutation',res.data)
        });
      }
    },
    modules:{

    }
  })

export default store