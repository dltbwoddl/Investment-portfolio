<template>
    <div>
        <BackB v-bind:url="url"></BackB>
        <b-button variant="outline-primary" v-on:click='addinput()'><b-icon icon="file-plus"></b-icon></b-button>
        <form action="http://localhost:3000/HabitListModify" method="POST">
            <div v-for="habit in HabitList" v-bind:key="habit.id">
                <div :id="habit.id">
                    <ModifyB v-bind:id="habit.id" :event="habit.habit"></ModifyB><b-button v-on:click="deletebutton(habit.id)" variant="danger"><b-icon icon="file-minus"></b-icon></b-button>
                </div>
            </div>
            <b-button type="submit" variant="danger"><b-icon icon="file-arrow-up"></b-icon></b-button>
        </form>
        {{HabitLastId}}
    <Plusb></Plusb>
</div>
</template>

<script>
export default {
    components:{

    },
    data : function(){
        return{
            url :'/home'
        }
    },
    computed:{
        HabitList : function(){
            return this.$store.state.HabitList
        },
        HabitLastId : function(){
            return this.$store.state.HabitList[this.HabitList.length-1]['id']
        }
    },
    methods:{
      addinput : function(){
          this.HabitList.push({
              id : this.HabitLastId+1,
              habit : ''
          });
      },
      deletebutton : function(id){
          console.log(id)
        var elem = document.getElementById(`${id}`);
        elem.remove();
      }
    }

}
</script>

<style>

</style>