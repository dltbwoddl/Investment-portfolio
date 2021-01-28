<template>
    <div><DetailT 
            v-bind:name ="RiskyEventDetail.event" 
            :money ='RiskyEventDetail.money'
            :des ='RiskyEventDetail.detail' ></DetailT></div>

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