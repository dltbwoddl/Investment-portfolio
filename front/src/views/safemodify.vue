<template>
    <div>1<ModifyB></ModifyB><Plusb></Plusb></div>

</template>

<script>
export default {
    components:{

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