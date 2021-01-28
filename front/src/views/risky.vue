<template>
    <div>
        <div v-for="eventname in RiskyList" v-bind:key="eventname.id">
           <GrayB v-bind:eventname="eventname.event"></GrayB>     
        </div>
        
        <BlackB v-bind:modify='modifyname'></BlackB>
    </div>

</template>

<script>
export default {
    components:{

    },
    data: function () {
        return { 
            modifyname : '위험 자산 수정'
        }
    },
    computed:{
        RiskyList: function(){
            return this.$store.state.RiskyList;
        }
    }
}
</script>

<style>

</style>