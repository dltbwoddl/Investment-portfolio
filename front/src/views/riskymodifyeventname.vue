<template>
    <div>1<ModifyB></ModifyB><Plusb></Plusb></div>

</template>

<script>
export default {
    components:{

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