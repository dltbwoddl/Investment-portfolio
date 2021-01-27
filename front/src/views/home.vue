<template>
    <div>
        <b-button variant="outline-primary" href="../risky">위험자산</b-button>
        <b-button variant="outline-primary" href="../safe">안전자산</b-button>
        <BlueB></BlueB>
        <ModifyB></ModifyB>
    </div>
</template>

<script>
import BlueB from '../components/BlueButton'
export default {
    components:{
        BlueB
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