<template>
    <div>1<GrayB></GrayB><BlackB></BlackB></div>

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