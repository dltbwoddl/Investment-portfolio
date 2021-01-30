<template>
    <div>
        <BackB v-bind:url="url"></BackB>
        <div v-for="risk in RiskyList" v-bind:key="risk.id">
            <ModifyB v-bind:id="risk.id" :event="risk.event"></ModifyB>
        </div>
        <Plusb></Plusb>
    </div>

</template>

<script>
export default {
    components:{

    },
    data: function () {
        return { 
            url:'url'
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