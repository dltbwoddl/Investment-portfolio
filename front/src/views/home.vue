<template>
    <div>
        <BackB v-bind:url="url"></BackB>
        <div v-for="value in BigCategory" v-bind:key='value'>
            <BlueB v-bind:name="value" :url="value"></BlueB>
        </div>
        <BlackB v-bind:modify="modifyname" :url="modifyurl"></BlackB>
    </div>
</template>

<script>
import BlueB from '../components/BlueButton'
export default {
    components:{
        BlueB
    },
      data: function () {
     return { 
       BigCategory : ['risky', 'safe'],
       modifyname : '투자 습관 수정',
       url:'url',
       modifyurl : '/habitmodify'

    }
  },
    computed:{
        TotalEventMoney: function(){
            return this.$store.state.TotalEventMoney;
        },
        HabitList : function(){
            return this.$store.state.HabitList
        }
    }
}
</script>

<style>

</style>