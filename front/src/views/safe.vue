<template>
    <div>
        <BackB v-bind:url="url"></BackB>
        <div v-for="event in SafeList" v-bind:key="event.id">
            <GrayB v-bind:eventname="event.event"></GrayB>
        </div>
        <BlackB v-bind:modify="modifyname" :url='modifyurl'></BlackB>
    </div>

</template>

<script>
export default {
    components:{
    },
    data: function () {
        return { 
            modifyname : '안전 자산 수정',
            url : 'url',
            modifyurl : '/safemodify'
        }
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