<template>
    <div>1<GrayB></GrayB><BlackB></BlackB></div>

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