<template>
    <div><DetailT
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
    computed:{
        SafeEventDetail: function(){
            return this.$store.state.SafeEventDetail;
        }
    }
}
</script>

<style>

</style>