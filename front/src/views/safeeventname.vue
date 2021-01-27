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
        SafeEventDetail: function(){
            return this.$store.state.SafeEventDetail;
        }
    }
}
</script>

<style>

</style>