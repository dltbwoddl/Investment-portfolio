<template>
    <div>
        <div v-for="RiskyEvent in RiskyEventLIst" v-bind:key="RiskyEvent.id">
            <GrayB v-bind:eventname="RiskyEvent.event"></GrayB>
        </div>
            <BlackB v-bind:modify="modifyname"></BlackB>
        </div>

</template>

<script>
export default {
    components:{
    },
    data: function () {
        return { 
            modifyname : '개별 종목 수정'
        }
    },
    computed:{
        RiskyEventLIst: function(){
            return this.$store.state.RiskyEventLIst;
        }
    }
}
</script>

<style>

</style>