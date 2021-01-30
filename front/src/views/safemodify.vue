<template>
    <div>
        <BackB v-bind:url="url"></BackB>
        <div v-for="safe in SafeList" v-bind:key="safe.id">
            <ModifyB v-bind:id="safe.id" :event="safe.event"></ModifyB>
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
        SafeList: function(){
            return this.$store.state.SafeList;
        }
    }
}
</script>

<style>

</style>