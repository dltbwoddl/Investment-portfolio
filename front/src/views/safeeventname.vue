<template>
    <div>
        <BackB v-bind:url="url"></BackB>
        <DetailT
    v-bind:name="SafeEventDetail.event"
    :money="SafeEventDetail.money"
    :des='SafeEventDetail.detail'></DetailT></div>

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
        SafeEventDetail: function(){
            return this.$store.state.SafeEventDetail;
        }
    }
}
</script>

<style>

</style>