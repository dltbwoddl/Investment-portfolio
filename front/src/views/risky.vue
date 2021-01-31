<template>
    <div>
        <BackB v-bind:url="url"></BackB>
        <div v-for="eventname in RiskyList" v-bind:key="eventname.id">
           <GrayB v-bind:eventname="eventname.event"></GrayB>     
        </div>
        
        <BlackB v-bind:modify='modifyname' :url='modifyurl'></BlackB>
    </div>

</template>

<script>
export default {
    components:{

    },
    data: function () {
        return {
            url:'url', 
            modifyname : '위험 자산 수정',
            modifyurl : '/riskymodify'
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