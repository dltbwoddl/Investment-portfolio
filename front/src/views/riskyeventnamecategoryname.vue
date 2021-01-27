<template>
    <div>1<DetailT></DetailT></div>

</template>

<script>
import DetailT from '../components/DetailTamplate'
export default {
    components:{
        DetailT
    },
    computed:{
        RiskyEventDetail: function(){
            return this.$store.state.RiskyEventDetail;
        }
    }
}
</script>

<style>

</style>