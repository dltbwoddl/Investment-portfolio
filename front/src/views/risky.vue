<template>
    <div>1<GrayB></GrayB><BlackB></BlackB></div>

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