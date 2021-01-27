<template>
  <div>  <ModifyB></ModifyB>
  <Plusb></Plusb>
</div>
</template>

<script>
export default {
    components:{
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