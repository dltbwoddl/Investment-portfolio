<template>
    <div>
        <BackB v-bind:url="url"></BackB>
        <DetailT 
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
    data: function () {
        return { 
            url:'url'
        }
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