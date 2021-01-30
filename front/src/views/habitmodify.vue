<template>
  <div>
      <BackB v-bind:url="url"></BackB>
      <div v-for="habit in HabitList" v-bind:key="habit.id">
          <ModifyB v-bind:id="habit.id" :event="habit.habit"></ModifyB>
      </div>
    <Plusb></Plusb>
</div>
</template>

<script>
export default {
    components:{
    },
    data : function(){
        return{
            url :'url'
        }
    },
    computed:{
        HabitList : function(){
            return this.$store.state.HabitList
        }
    }
}
</script>

<style>

</style>