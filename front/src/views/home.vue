<template>
    <div>
        <BackB v-bind:url="url"></BackB>
        <div v-for="value in BigCategory" v-bind:key='value'>
            <BlueB v-bind:name="value"></BlueB>
        </div>
        <BlackB v-bind:modify="modifyname"></BlackB>
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
       BigCategory : ['위험자산', '안전자산'],
       modifyname : '투자 습관 수정',
       url:'url'

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