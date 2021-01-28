<template>
    <div>
        <ModifyB></ModifyB>
        <Plusb></Plusb>
    </div>

</template>

<script>
export default {
    components:{

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